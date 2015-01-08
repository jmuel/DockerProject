* **Create a React Component in a CommonJS module**

* **Explain how you thought about the creation of the component.**

The react component is in js/components/Input.js This is a fairly simple example of a react component that demonstrates
how React does data binding. Rather than using two-way data binding like AngularJS does, React gives you the ability to render the
component based on the object state, and to limit the actions that can mutate that state. This makes it easy to create two inputs that are
joined together. Instead of trying to keep two fully functional input fields that you have to keep in sync, you have two minimally
functional input fields that reflect a single state and act on the same state. The component itself is not particularly useful, but
it's nice for demos since you can start with one input field, add a second, remove the change handler from the second input, etc and the
functionality reflects all of that very quickly and obviously.

* **Build a project with a dockerfile. Put the container on the Hub so we can pull and run it.**

It's under jmuel/docker-app and I was running it with "docker run -p 1337:1337 jmuel/docker-app".

* **What piece of tech (programming language, framework, paper, etc) excites you the most right now? Why?**

I'll stray away from programming a little bit and talk about the Oculus Rift (and VR in general). The current technology isn't that great.
I have an Oculus DK2 and it's hard to get it working and the screen door effect is very noticeable, but even with these problems the Rift
creates some surprisingly effective illusions. Things don't look any more detailed, but putting things in front of you that way
makes you really notice little things like when a character is shorter or taller than you, or when a character invades your personal space.
It also has some interesting applications in things like teleconferencing or even creating a new interface for a computer that gives
you a virtual screen that surrounds you. It's got a long way to go but the way it changes the game in how we interact with computers makes
it very interesting to see where it's going.

In case you wanted to hear something about my opinion on programming, I'd say that the thing I'm most enjoying right now is functional
programming. The most important aspect of it to me is the simplicity it allows. Object oriented code tends to end up complex due to the way
it tends to mix metaphors. Abstract classes, interfaces and inheritance tend to have small but crucial differences between languages,
variables tend to end up public or private for little reason and classes are often used simply for namespacing (such as the Math classes
you tend to see in languages like Java). Functional programming tends to have fewer core tools. Everything builds out of functions
and functions tend to limit their side effects. This makes it more natural for me to switch between languages and it feels like the lack of
options can promote cleaner code. I've also enjoyed the way it promotes code reuse by creating common functions like map or reduce that
take much of their functionality from other functions that are passed in. This isn't to say that OO design is completely useless
but it's fun to use a different way to look at code.