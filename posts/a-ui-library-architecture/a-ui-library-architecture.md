---
title: "A UI library architecture"
date: "2021-01-01"
tags: "architecture,design,ui"
---

## Introduction

I've recently thought about how an UI library architecture should be with abstraction. Let me explain why it should be with `abstraction` even for a UI library.  
I pick up `types` to explain. `Types` are giving us super readable stuff in every implementation such as a UI library, or even a function. But it's potentially making things complicated as well if you don't have any thoughts. Imagine when you are about to make button components such as the cancel button, or the submit button. If you don't think about abstraction, these buttons could have the same types such as `onChange`, `label`, or `type` as individuals. That said, the same logics are anywhere. That's definitely not readable and maintainable because you have to modify things when the old type is changed. So you had better make a type named like `ButtonBase` for abstraction. This point has to be put on styles because you should have your own styles as a UI library. So these reasons are why abstraction is needed even in a UI library.

## My thoughts on the architecture

I guess here are the decent things when you make a UI component.

- HTML Elements
- Styles
- Types
- Logics

I got strongly inspired by [React Spectrum](https://react-spectrum.adobe.com/react-spectrum/).

In addition to it, I updated a few things. My thought is that almost all of those things should be split into a part to make ONE component. Let me explain the `ALMOST` part. The Styles part is evenly split though, but in React, HTML Elements and logics have to be combined for readable code. You might not need the Styles part if you don't directly use CSS such as Tailwind CSS(*1).

*1 Technically, Tailwind CSS uses CSS.

## The folder structure

Here is the UI folder tree following my architecture.
A sample GitHub repository is [here](https://github.com/tkeiyama/stdui)

The UI library's name is `stdui` here for example.

```markdown
/root
|
|- configs
|
|- packages
   |- @stdui-styles/switch
   |- @stdui-types/switch
   |- @stdui-react/switch
```

I'm gonna write how dependencies are going on each package.

- @stdui-styles/switch

This package should have styles for the Switch. The commonly own styles like brand color should be somewhere else such as a package named @stdui-styles/common.

- @stdui-types/switch

This package basically doesn't have any dependencies except for core libraries such as React. But if a component has a base type like `ButtonBase`, it has to be on the dependencies.

- @stdui-react/switch

This package should have all other packages related to the component at least because they are the parts to make a component.

## Proposals

- @stdui-hooks/switch

This proposal get inspired by [useAutoComplete](https://material-ui.com/components/autocomplete/#useautocomplete) in [Material UI](https://material-ui.com/).

A hook lets you easily set properties you need for a component. This is not only about autocomplete. This should be worked on other components even a button.

- @stdui/core

This package includes components and types to publish. If you have a company name or something, you do the same thing as React Spectrum.

## Conclution

TBH, Almost everything is the inspiration by awesome libraries. However, I think this is my go-to so far when I make a UI library. The good part is you can use a part of the library at the type level. These things also can be used atoms and molecules in Atomic Design. I'm gonna keep seeking the best way for a UI library!

Thanks for reading this!
