# The SOLID Principles of React

---

**Quoc Khanh**

khanh.bui@coderschool.vn



# Software

Note: There a reason Software is "Soft" b/c we have certain expectation in Software. And that is "Easy to change and extend", in comparison to Hardware, which is difficult to change.



# Soft

## = <!-- .element: class="fragment" data-fragment-index="1" -->

#### Easy to change and extend <!-- .element: class="fragment" data-fragment-index="2" -->

Note: Unfortunately, you may experience the opposite of this in your career. It may depend on where you work and what you work on. But in general, larger frameworks tend to be harder to change and extend. That ultimately may be due to dependencies aka coupling.



> "Coupling is the enemy of change, because it links together things that must change in parallel."

(David Thomas, Andrew Hunt, The Pragmatic Programmer)



> "Dependency is the key problem in software development at all scales."

(Ken Beck, TDD by Example)

Note: So dependency or another word coupling is exactly the problem we need to overcome in order to write large-scale software. Unfortunately, it's not an easy problem. On the contrary, this is a particularly difficult problem. But luckily, there are a couple of guidelines that help us. This is exactly what this talk is about: The SOLID Principles.



## The SOLID Principles

---

<div style="text-align: left; font-size: 1.6rem;">

  ### S - Single-Responsibility Principle <!-- .element: class="fragment" data-fragment-index="1" -->

  ### O - Open-Closed Principle <!-- .element: class="fragment" data-fragment-index="2" -->

  ### L - Liskov Substitution Principle <!-- .element: class="fragment" data-fragment-index="3" -->

  ### I - Interface Segregation Principle <!-- .element: class="fragment" data-fragment-index="4" -->

  ### D - Dependency Inversion Principle <!-- .element: class="fragment" data-fragment-index="5" -->
</div>

Note: The SOLID Principles are a set of guidelines that allows us to deal with dependencies in different ways. SOLID combines five principles:
- SRP: One of the most misinterpreted principles, we def try to address it in detail.
- OCP: This name doesn't suggest a lot, but it's one of the most important principle that I can tell you.
- LSP: Much wider known, even if you haven't heard of it, you probably used it on the daily basis, I assumed.
- ISP: It's name already says a lot, it's about segregation interfaces, we'll talk about why and how.
- And the last one is DIP.
- A brief history of these principles: They are not particularly new. For instance, OCP and LSP were formulated in 1988. But only in 2000, Robert C. Martin selected these five principles as the most important software design principles. At that time he called them the Principles of Object-Oriented Design. A couple years later, Michael Feathers arranged them in the exact order then the first letter gives us the acronym SOLID. And that's how SOLID was born as a set of guidelines help us write clean code.



## //

Note: The SOLID Principles are not specific to React. They are applicable to any object-oriented programming language. But they are particularly useful in React, because React is a component-based library. And components are a great way to encapsulate and isolate dependencies.
