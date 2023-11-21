<script lang="ts">
  import { goto } from '$app/navigation';
  import { validator } from '@felte/validator-zod';
  import { Mnemonic } from 'ethers';
  import { createForm } from 'felte';
  import { z } from 'zod';

  const schema = z.object({
    seedphrase: z
      .string({ required_error: 'This field is required' })
      .min(1, { message: 'This field is required' })
      .refine((value) => Mnemonic.isValidMnemonic(value), {
        message: 'Invalid seed phrase'
      })
  });

  const { form, errors } = createForm({
    extend: validator({ schema }),
    onSubmit(values) {
      console.log({ values });
      goto('/home');
    }
  });
</script>

<div class="p-4">
  <h2 class="mt-4 text-center text-2xl">Import wallet</h2>
  <p class="mt-2 text-center">Enter 12-word recovery phrase</p>
  <form use:form>
    <textarea
      name="seedphrase"
      rows={5}
      class="mt-4 w-full rounded-lg p-4 outline-primary"
    />
    {#if $errors.seedphrase}<div class="mt-1 text-xs text-red-500">
        {$errors.seedphrase[0]}
      </div>{/if}
    <button
      class="mt-8 block w-full rounded-lg bg-btn-primary py-3 text-btn-primary hover:bg-opacity-90"
      >Continue</button
    >
  </form>
</div>
