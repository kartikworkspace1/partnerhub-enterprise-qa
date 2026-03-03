# Page snapshot

```yaml
- generic:
  - generic [ref=e3]:
    - img [ref=e6]
    - generic [ref=e8]:
      - heading "Sign in to Partner Hub" [level=5] [ref=e9]
      - generic [ref=e10]:
        - text: Merchants
        - link "Click here" [ref=e11] [cursor=pointer]:
          - /url: https://dashboard.payarc.io/
      - generic [ref=e12]:
        - textbox "Username" [active] [ref=e14]
        - textbox "Password" [ref=e16]
        - button "Sign In" [ref=e17] [cursor=pointer]
        - link "Forgot password?" [ref=e19] [cursor=pointer]:
          - /url: /password/reset
        - generic [ref=e20]:
          - link "Privacy Policy" [ref=e21] [cursor=pointer]:
            - /url: https://payarc.com/privacy-policy/
          - generic [ref=e22]: "|"
          - link "Terms & Conditions" [ref=e23] [cursor=pointer]:
            - /url: https://payarc.com/terms-and-conditions/
  - alert [ref=e24]
```