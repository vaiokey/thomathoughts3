---
title: "Typed-Driven Development"
date: "2021-01-04"
---

## What is it?

Typed-driven development(abbreviated TDD in this post) is using types to manage things. A type can be everything such as the domain used in Domain-Driven Development(abbreviated DDD).

## Is TDD good for a large scale application?

IMO, this approach itself is not fillable to make the complicatedly real world because TDD doesn't have some smart stuff which other architectures have. The clean architecture for example, It separates logic and presenter to make the responsibilities clean. Thinking about only TDD will never bring it into the architecture. As that said, this approach is completely fine when you combine TDD with some stuff which you brought from other architectures.

## Why do you recommend TDD?

It is because this approach is readlly good as the basic development style. As I write on the title, TDD is just Typed `DRIVEN` development. So you just use this at the first when you make some things like a feature or a function.

## How can I use TDD?

Let me show you a simple example in TypeScript.  
Imagine when you are about to make the function to get the post data.  
I write type interfaces first.

```typescript
export type DateFormat = `${string}/${string}/${string}`;

export interface Post {
  date: DateFormat;
  id: string;
  title: string;
}

export interface PostData extends Post {
  /*
   * HTML elements of the content.
   */
  contentHtml: string;
}
```

Let me explain what was going on these type interfaces.  
You can see I started to write a tiny type interface such as `DateFormat`, then I added it to the larger type interface named `Post`, then I combine it with `contentHtml` which the real post needs. This is kind of LEGO and very simple, right?  
So the function looks like the below.

```typescript
import { PostData } from "./post.d";

function getPostData(): PostData {
  // some implementations
  return postData;
}
```

That's it. Nothing else you do.  
If you need a type interface for parameters, you just make the interface named like `GetPostDataParams`. And if the return type become more complicated, you just combine `PostData` with others, then put it on to the return type.  
TDD is pretty simple.

## What are Pros and Cons?

### Pros

- You implement a thing with Type first.
- You can make types from very tiny one, then combine it with others to make what you need.
- It's also useful for documentation and readable code which IDE suggests from the type.

### Cons

- The types don't implement anything, so you need to have ideas to make a function.
- TDD itself doesn't fit with the complecatedly large scale application.

## Conclusion

To be honest, I've just done with TDD for less than a year. So I'm not sure this implementation is suitable for any implementations so far. But it's pretty simple and very useful for thinking to make a feature in the first place. I'll keep seeking something else for Pros and Cons though, TDD is my go-to now.

Thanks for reading!
