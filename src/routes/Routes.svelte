<script lang="ts">
  import { onMount } from 'svelte';
  import { Route, Router, navigate } from 'svelte-routing';
  import Home from './home/Home.svelte';
  import Login from './login/Login.svelte';
  import PasswordCreate from './password/PasswordCreate.svelte';
  import WalletCreate from './wallet/WalletCreate.svelte';
  import WalletImport from './wallet/WalletImport.svelte';
  import WalletSetup from './wallet/WalletSetup.svelte';
  import Welcome from './welcome/Welcome.svelte';

  onMount(() => navigate('/welcome'));
</script>

<Router>
  <Route path="/login" component={Login} />
  <Route path="/password/create" component={PasswordCreate} />
  <Route path="/wallet/create" component={WalletCreate} />
  <Route path="/wallet/import" component={WalletImport} />
  <Route path="/wallet/setup" component={WalletSetup} />
  <Route path="/welcome" component={Welcome} />
  <Route path="/" component={Home} />
</Router>
