---
title: 'A React component in an Application Layer.'
date: '2021-02-21'
tags: 'architecture,react'
---

## Disclaimer

This is my on-going thought about a React component so far. So sometimes what I say doesn't make sense. I'm sorry for the part is here.

## Introduction

This post will talk about my thought of how we make a react component in an application layer with the React hooks. I assume you know [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). And we don't need to divide a React component into presentation and container anymore since the React hooks came out, but occasionally, we better separate those two things for some reasons such as readability or maintainability. Let me put my thought about this here.

## Why do we not need to divide a React component?

I actually have only one reason for this, and it is that we have to create two type interfaces for the components in TypeScript. People may tell me you just use `extends` for reducing the cost to create those interfaces and probably making it readable and maintainable. In my experiences, this is not an easy story as the above sentense because, most of time, I needed to re-write a type interface for a presentation component. I mean a few props are extended from container to presentation. I feel this is not a good type interface because the presentation interface means almost nothing unless the interface needs many props which are NOT related to the container props. The related props should be given straightly.(a few modifing is acceptable though)

## When should I use the architecture?

I'm not sure though, but as I said at the previous section, a presentation component needs the props which are NOT related to the props of the container component such as data from database. Let me paradoxically talk about if the presentation component has the related props. In that case, you just almost straightly give props to the presentaion component if the props are related. but here are some problems with it. The first one is we can't declare a value as the same name as Rust can do if we give it to the presentation with a few modifing. We need a new name for it. The second is the presentation interface completely means nothing, and creating the interface is wasting.  
The occasion is what I explained, but you need to carefully make a decision with it.

## So what are we gonna do?

As I said, we don't need to divide a React component for logic and presentation anymore, then we are conscious of abstraction for a React component because a logic part of the component is not gonna be huge if the component is abstracted. I don't think being abstracted definitely means a React component is not huge, but the abstraction is worth trying to avoid it.

## Conclution

I didn't say the dividing is not good. the architecture is pretty awesome and makes really sense, but I just think this is not our go-to all the time. To be honest, I'm still thinking(struggling) about a React component structure for readability or maintainability. I may change my thoughts in the future, but this is my thought so far.  

Thanks for reading!  
If you have any opnions of this, please give it to me on [here](https://github.com/tkeiyama/thomathoughts/issues)!  
