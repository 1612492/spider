<script lang="ts">
  import { validator } from '@felte/validator-zod';
  import { createForm } from 'felte';
  import { navigate } from 'svelte-routing';
  import { z } from 'zod';
  import { createPassword } from '@stores/account';

  const schema = z
    .object({
      password: z
        .string({ required_error: 'This field is required' })
        .min(1, { message: 'This field is required' }),
      confirmPassword: z
        .string({ required_error: 'This field is required' })
        .min(1, { message: 'This field is required' })
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: 'Password does not match',
      path: ['confirmPassword']
    });

  const { form, errors } = createForm<z.infer<typeof schema>>({
    extend: validator({ schema }),
    onSubmit: async ({ password }) => {
      await createPassword(password);
      navigate('/wallet/setup');
    }
  });
</script>

<div class="p-4">
  <h2 class="mt-4 text-center text-2xl">Create password</h2>
  <p class="mt-2 text-center">This password use to unclock your wallet.</p>
  <form use:form class="mt-8">
    <div class="mt-4">
      <label for="password">Password</label>
      <input
        name="password"
        type="password"
        class="mt-1 w-full rounded-lg p-4 outline-primary"
      />
      {#if $errors.password}<div class="mt-1 text-xs text-red-500">
          {$errors.password[0]}
        </div>{/if}
    </div>
    <div class="mt-4">
      <label for="confirmPassword">Re-enter password</label>
      <input
        name="confirmPassword"
        type="password"
        class="mt-1 w-full rounded-lg p-4 outline-primary"
      />
      {#if $errors.confirmPassword}<div class="mt-1 text-xs text-red-500">
          {$errors.confirmPassword[0]}
        </div>{/if}
    </div>
    <button
      class="mt-8 block w-full rounded-lg bg-btn-primary py-3 text-btn-primary hover:bg-opacity-90"
      >Continue</button
    >
  </form>
</div>
