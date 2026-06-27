*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg:        #0e0e12;
  --surface:   #18181b;
  --border:    #27272a;
  --border-mid:#3f3f46;
  --text:      #e2e2e8;
  --text-muted:#71717a;
  --text-dim:  #52525b;
  --text-faint:#3f3f46;
  --indigo:    #6366f1;
  --violet:    #8b5cf6;
  --green:     #22c55e;
  --red:       #f87171;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

button {
  font-family: inherit;
}

a {
  font-family: inherit;
}
