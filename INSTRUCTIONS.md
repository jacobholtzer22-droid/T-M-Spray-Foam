Tracking install. Write this tracking block into site.config.ts as the `tracking` key, exactly as given, and change nothing else (AGENT.md, CI mode, Tracking installs):

```ts
tracking: {
  googleAdsId: 'AW-18443721661',
  conversions: { form: 'AW-18443721661/WnkHCLT11vMcEL2309pE', call: 'AW-18443721661/aw2qCLr11vMcEL2309pE' },
},
```

Then run the gate: check 22 must pass.