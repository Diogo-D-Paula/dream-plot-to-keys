
-- Lock down the SECURITY DEFINER function
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

-- Replace the permissive insert policy with one that enforces basic input limits
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Anyone can submit a valid lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(nome) BETWEEN 2 AND 120
    AND char_length(whatsapp) BETWEEN 8 AND 30
    AND (cidade IS NULL OR char_length(cidade) <= 120)
    AND (renda IS NULL OR (renda >= 0 AND renda <= 100000000))
  );
