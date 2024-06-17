export const defaultIntro = `# Welcome to Mrkdwn! 🎉

Mrkdwn is a simple, open source markdown editor[^Ref]. 

## General Features 
- Follows GFM guidelines[^Ref2]
- Easy insertion of commonly used elements (and conversion by selection)
- Mobile friendly
- Cached save
- Dark mode
- Scroll sync
- Upload existing files and generate new ones

## Examples 

|Tables|Tables|Tables|
|-------|-------|-------|
|Content|Content|Content|
|Content|Content|Content|

**Equations (The Cauchy-Schwarz Inequality)**
$$\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$

[Links](google.com)
![Images](https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png)


**Bolding**
_Italics_
~~Strikethrough~~
==Highlighting==
> Blockquotes
>>Nested blockquotes
\`\`\`
const demonstration = () => {
  console.log('Code blocks') 
}
\`\`\`
\`Inline code blocks\`

- Unordered
-  List

1. Ordered
2. List

- [x] Task 
- [ ] List

Footnotes[^Footnote]

---

==**All** of which _can_ be combined==. Check out the spec for more![^Ref2] 



[^Ref]: [Repository ](https://github.com/bzap/mrkdwn)
[^Ref2]: [GFM Reference](https://github.github.com/gfm/)

[^Footnote]: I am a footnote with **styled text**.
`;
