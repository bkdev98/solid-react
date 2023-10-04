# The SOLID Principles of React

---

**Quoc Khanh**

khanh.bui@coderschool.vn



<img src="/images/solid-react.png" style="width: 200px; height: 200px; margin: 0px auto 40px;"/>

[https://solid-react.quocs.com](https://solid-react.quocs.com)

Note: You could scan the QR code or go to the link below to follow along the slides.
So I guess in this room we're all programmers, so then you are part of my tribe. You, and I, and we all together, share a passion for something, and we can communicate about it, in a way that most other people can't. And so that is something we should cherish together.



# <span><span class="fragment highlight-red" data-fragment-index="1">Soft</span>ware</span>

Note: And so What is Software? There a reason Software is "Soft" because we have certain expectation in Software. And that is "Easy to change and extend", in comparison to Hardware, which is difficult to change.



# <span style="color: #ff2c2d">Soft</span>

## = <!-- .element: class="fragment" data-fragment-index="2" -->

### Easy to change and extend <!-- .element: class="fragment" data-fragment-index="3" -->



<img src="/images/stackoverflow-1.png" class="fragment semi-fade-out" data-fragment-index="1" style="width: 100%; height: 100%" />
<img src="/images/stackoverflow-2.png" class="fragment fade-in-then-out" data-fragment-index="1" style="position: absolute; width: 100%; top: 10%" />
<img src="/images/stackoverflow-3.png" class="fragment" data-fragment-index="2" style="position: absolute; width: 100%; top: 35%" />

Note: Unfortunately, you may experience the opposite of this in your career. It may depend on where you work and what you work on. Then one morning your boss yell at you because your component is 300 lines long.



> "Coupling is the enemy of change, because it links together things that must change in parallel."

(David Thomas & Andrew Hunt, The Pragmatic Programmer)

Note: In general, larger frameworks tend to be harder to change and extend. That ultimately may be due to dependencies aka coupling.



> "Dependency is the key problem in software development at all scales."

(Ken Beck, TDD by Example)

Note: So dependency or another word [coupling] is exactly the problem we need to overcome in order to write large-scale software. Unfortunately, it's not an easy problem. On the contrary, this is a particularly difficult problem. But luckily, there are a couple of guidelines that help us. This is exactly what this talk is about: The SOLID Principles.



### The SOLID Principles

---

<div style="text-align: left; font-size: 1.6rem;">

  ### <span><span style="color: #E13440">S</span>ingle-Responsibility Principle</span> <!-- .element: class="fragment" data-fragment-index="1" -->

  ### <span><span style="color: #E13440">O</span>pen-Closed Principle</span> <!-- .element: class="fragment" data-fragment-index="2" -->

  ### <span><span style="color: #E13440">L</span>iskov Substitution Principle</span> <!-- .element: class="fragment" data-fragment-index="3" -->

  ### <span><span style="color: #E13440">I</span>nterface Segregation Principle</span> <!-- .element: class="fragment" data-fragment-index="4" -->

  ### <span><span style="color: #E13440">D</span>ependency Inversion Principle</span> <!-- .element: class="fragment" data-fragment-index="5" -->
</div>

---

<div style="display: flex; align-items: center; font-size: 0.6em">
  <div class="fragment" data-fragment-index="6" style="display: flex; flex-direction: column; flex: 1; flex-grow: 1; align-items: center">
    <img src="/images/uncle-bob.png" style="width: 120px; height: 120px; border-radius: 20px; margin-right: 20px;"/>
    <span>Robert C. Martin</span>
  </div>
  <div class="fragment" data-fragment-index="7" style="display: flex; flex-direction: column; flex: 1; flex-grow: 1; align-items: center">
    <img src="/images/michael-feathers.jpeg" style="width: 120px; height: 120px; border-radius: 20px; margin-right: 20px;"/>
    <span>Michael Feathers</span>
  </div>
</div>

Note: The SOLID Principles are a set of guidelines that allows us to deal with dependencies in different ways. SOLID combines five principles:
- SRP: One of the most misinterpreted principles, we def try to address it in detail.
- OCP: This name doesn't suggest a lot, but it's one of the most important principle that I can tell you.
- LSP: Much wider known, even if you haven't heard of it, you probably used it on the daily basis, I assumed.
- ISP: It's name already says a lot, it's about segregation interfaces, we'll talk about why and how.
- And the last one is DIP.
- A brief history of these principles: They are not particularly new. For instance, OCP and LSP were formulated in 1988. But only in 2000, Robert C. Martin selected these five principles as the most important software design principles. At that time he called them the Principles of Object-Oriented Design. A couple years later, Michael Feathers arranged them in the exact order then the first letter gives us the acronym SOLID. And that's how SOLID was born as a set of guidelines help us write clean code.



<img src="/images/wiki.png" style="width: 100%;"/>
Note: The SOLID Principles are not specific to React. They are applicable to any object-oriented programming language. But they are particularly useful in React, because React has some OOP characteristics like inheritance (kế thừa) and composition (tổng hợp).



<div style="text-align: left; font-size: 1.6rem;">

### I will introduce the SOLID principles...

-> as general set of guidelines not limited to OO programming <!-- .element: class="fragment" data-fragment-index="1" -->

-> applicable and example in React + TypeScript  <!-- .element: class="fragment" data-fragment-index="2" -->

</div>



### The Single-Responsibility Principle

---

> <span>The single-responsibility principle (SRP) is a computer programming principle that states that <span style="color: #ff2c2d">"A module should be responsible to one, and only one, actor."</span></span> <!-- .element: class="fragment" data-fragment-index="1" -->

(Wikipedia) <!-- .element: class="fragment" data-fragment-index="2" -->



### The Single-Responsibility Principle

---

> <span class="fragment" data-fragment-index="1">Everything should do just <span class="fragment highlight-red" data-fragment-index="3">one thing</span>.</span>

(Common knowledge?) <!-- .element: class="fragment" data-fragment-index="2" -->



### The Single-Responsibility Principle

---

> <span class="fragment" data-fragment-index="1">We want to design components that are self-contained: independent, and with a single, well-defined purpose ([cohesion]). When components are isolated from one another, you know that you can <span class="fragment highlight-red" data-fragment-index="3">change</span> one without having to worry about the rest.</span>

(David Thomas & Andrew Hunt, The Pragmatic Programmer) <!-- .element: class="fragment" data-fragment-index="2" -->



### The Single-Responsibility Principle

---

> <span class="fragment" data-fragment-index="1">A class should have only <span class="fragment highlight-red" data-fragment-index="3">one reason to change</span>.</span>

(Robert C. Martin, Agile Software Development) <!-- .element: class="fragment" data-fragment-index="2" -->



##### "The Single-Responsibility Principle"

<img src="/images/srp-meme.jpeg" alt="SRP meme" class="fragment" style="width: 50%; margin: 0 auto"/>



### The Single-Responsibility Principle

---

<span style="text-decoration: underline">Common Cases:</span>

-> Component rendering <!-- .element: class="fragment" data-fragment-index="1" -->

-> Application state <!-- .element: class="fragment" data-fragment-index="2" -->

-> Data fetching <!-- .element: class="fragment" data-fragment-index="3" -->

-> Hooks <!-- .element: class="fragment" data-fragment-index="4" -->



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="1-34|2-4|6-18|20-37|31-34"><script type="text/template">function DogList() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    fetch('/doggo')
      .then((res) => res.json())
      .then((data) => {
        setDogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.name}>
          <img src={dog.image} alt={dog.name} />
          <div>{dog.name}</div>
        </li>
      ))}
    </ul>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="2-18"><script type="text/template">function DogList() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    fetch('/doggo')
      .then((res) => res.json())
      .then((data) => {
        setDogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.name}>
          <img src={dog.image} alt={dog.name} />
          <div>{dog.name}</div>
        </li>
      ))}
    </ul>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="2|15-18"><script type="text/template">function DogList() {
  const { dogs, loading, error } = useDogListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.name}>
          <img src={dog.image} alt={dog.name} />
          <div>{dog.name}</div>
        </li>
      ))}
    </ul>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="15|1-20|13,17"><script type="text/template">function DogList() {
  const { dogs, loading, error } = useDogListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {dogs.map((dog) => (
        <DogCard key={dog.name} data={dog} />
      ))}
    </ul>
  );
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
    </li>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="13,17,21-23"><script type="text/template">function DogList() {
  const { dogs, loading, error } = useDogListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ListLayout>
      {dogs.map((dog) => (
        <DogCard key={dog.name} data={dog} />
      ))}
    </ListLayout>
  );
}

function ListLayout({ children }: { children: ReactNode }) {
  return <ul style="display: grid">{children}</ul>;
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
    </li>
  );
}
</script></code></pre>



### The Single-Responsibility Principle

---

> <span style="text-decoration: underline">Guidelines</span>: Prefer cohesive software entities: <span class="fragment highlight-red" data-fragment-index="1">Everything that does not strictly belong together, should be separated.</span>


### Q&A



<!-- .element: data-auto-animate -->
### The Open-Closed Principle



<!-- .element: data-auto-animate -->
### The Open-Closed Principle

> "Software entities (classes, modules, functions, etc.) should be <span style="color: #ff2c2d">open for extension</span>, but <span style="color: #ff2c2d">closed for modification</span>."

(Bertrand Meyer, Object-Oriented Software Construction)

Note: In other words, write your components in such a way, that if you wanted to add more functionality, you shouldn’t change the existing code.



<!-- .element: data-auto-animate -->
#### The Open-Closed Principle

<pre data-id="ocp-animation"><code data-line-numbers="1-14"><script type="text/template">interface Dog {
  name: string;
  image: string;
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
    </li>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
#### The Open-Closed Principle

<pre data-id="ocp-animation"><code data-line-numbers="4,12-16"><script type="text/template">interface Dog {
  name: string;
  image: string;
  role: 'good' | 'bad';
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      {data.role === 'good' ? (
        <GoodBoyIcon />
      ) : data.role === 'bad' ? (
        <BadBoyIcon />
      ) : null}
    </li>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
#### The Open-Closed Principle

<pre data-id="ocp-animation"><code data-line-numbers="4,16-17"><script type="text/template">interface Dog {
  name: string;
  image: string;
  role: 'good' | 'bad' | 'ugly';
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      {data.role === 'good' ? (
        <GoodBoyIcon />
      ) : data.role === 'bad' ? (
        <BadBoyIcon />
      ) : data.role === 'ugly' ? (
        <UglyBoyIcon />
      ) : null}
    </li>
  );
}
</script></code></pre>

Note: So... every time you use an if / switch statement, you are violating the Open-Closed Principle.



### Composition


![Composition](/images/composition.png) <!--.element: style="margin: 0px auto" -->

Note: more flexible, testing scope not heavily depend on superclass, allows to use functionality from different class



<!-- .element: data-auto-animate -->
<pre data-id="ocp-animation"><code data-line-numbers="1-21"><script type="text/template">interface Dog {
  name: string;
  image: string;
  role: 'good' | 'bad' | 'ugly';
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      {data.role === 'good' ? (
        <GoodBoyIcon />
      ) : data.role === 'bad' ? (
        <BadBoyIcon />
      ) : data.role === 'ugly' ? (
        <UglyBoyIcon />
      ) : null}
    </li>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="ocp-animation"><code data-line-numbers="1-21|23-44|45-54|25-27,29,35-37,39|7-21"><script type="text/template">interface Dog {
  name: string;
  image: string;
  role: 'good' | 'bad' | 'ugly';
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      {data.role === 'good' ? (
        <GoodBoyIcon />
      ) : data.role === 'bad' ? (
        <BadBoyIcon />
      ) : data.role === 'ugly' ? (
        <UglyBoyIcon />
      ) : null}
    </li>
  );
}

function GoodDogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      <GoodBoyIcon />
    </li>
  );
}

function BadDogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      <BadBoyIcon />
    </li>
  );
}

// etc...

const dogCardByRoles = {
  good: GoodDogCard,
  bad: BadDogCard,
  ugly: UglyDogCard,
};

const DogCard = dogCardByRoles[dog.role];
</script></code></pre>

Note: Violate DRY principle



<!-- .element: data-auto-animate -->
<pre data-id="ocp-animation"><code data-line-numbers="7,12|17-34"><script type="text/template">interface Dog {
  name: string;
  image: string;
  role: 'good' | 'bad' | 'ugly';
}

function DogCard({ data, children }: { data: Dog; children: ReactNode }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      {children}
    </li>
  );
}

function GoodDogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      <GoodBoyIcon />
    </li>
  );
}

function BadDogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      <BadBoyIcon />
    </li>
  );
}

// etc...

const dogCardByRoles = {
  good: GoodDogCard,
  bad: BadDogCard,
  ugly: UglyDogCard,
};

const DogCard = dogCardByRoles[dog.role];
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="ocp-animation"><code data-line-numbers="17-34|1-41"><script type="text/template">interface Dog {
  name: string;
  image: string;
  role: 'good' | 'bad' | 'ugly';
}

function DogCard({ data, children }: { data: Dog; children: ReactNode }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      {children}
    </li>
  );
}

function GoodDogCard({ data }: { data: Dog }) {
  return (
    <DogCard data={data}>
      <GoodBoyIcon />
    </DogCard>
  );
}

function BadDogCard({ data }: { data: Dog }) {
  return (
    <DogCard data={data}>
      <BadBoyIcon />
    </DogCard>
  );
}

// etc...

const dogCardByRoles = {
  good: GoodDogCard,
  bad: BadDogCard,
  ugly: UglyDogCard,
};

const DogCard = dogCardByRoles[dog.role];
</script></code></pre>

Note: This should works best for cases like extends for specific user role Admin, User, Guest etc...



<!-- .element: data-auto-animate -->
<pre data-id="ocp-animation"><code data-line-numbers="17-34"><script type="text/template">interface Dog {
  name: string;
  image: string;
  role: 'good' | 'bad' | 'ugly';
}

function DogCard({ data, children }: { data: Dog; children: ReactNode }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
      {children}
    </li>
  );
}

const roleIcons = {
  good: <GoodBoyIcon />,
  bad: <BadBoyIcon />,
  ugly: <UglyBoyIcon />,
};

function DogCardByRole({ data }: { data: Dog }) {
  return (
    <DogCard data={data}>{roleIcons[data.role]}</DogCard>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
#### You build a AlertDialog component...

<pre data-id="alert-animation" class="fragment" data-fragment-index="1"><code><script type="text/template">const AlertDialog = ({
  title,
  opened,
}) => {
  if (!opened) {
    return null
  }

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
</script></code></pre>



<!-- .element: data-auto-animate -->
#### You build a AlertDialog component...

<pre data-id="alert-animation"><code><script type="text/template">const AlertDialog = ({
  title,
  description,
  opened,
  onCancel,
  onConfirm,
}) => {
  if (!opened) {
    return null
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onCancel}>X</button>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  )
}
</script></code></pre>



<!-- .element: data-auto-animate -->
#### You build a AlertDialog component...

<pre data-id="alert-animation"><code><script type="text/template">const AlertDialog = ({
  title,
  description,
  opened,
  onCancel,
  onConfirm,
  textareaRows,
  isShortInput,
  isLoading,
  className,
  containerClassName,
  formGroupClassName,
  placeholder,
  id,
  onChange,
  onInput,
  isTouched,
  onClearClick,
  addonLeft,
  addonRight,
  helpText,
  labelStyle,
  onInvalid,
  onBlur,
  maxLength,
  hasClearButton,
}) => {
  if (!opened) {
    return null
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onCancel}>X</button>
      <button onClick={onConfirm}>Confirm</button>
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
      <!-- 🧎🏿‍♀️ 🧎🏿‍♀️ 🧎🏿‍♀️ -->
    </div>
  )
}
</script></code></pre>



> Use composition from the start



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="1-22"><script type="text/template">import * as AlertDialog from '@radix-ui/react-alert-dialog';

const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button>Delete account</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
)
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="12-14"><script type="text/template">import * as AlertDialog from '@radix-ui/react-alert-dialog';

const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button>Delete account</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </AlertDialog.Description>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
)
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="code-animation"><code data-line-numbers="15-22"><script type="text/template">import * as AlertDialog from '@radix-ui/react-alert-dialog';

const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button>Delete account</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button>Cancel</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button>Yes, delete account</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
)
</script></code></pre>


### Q&A



### The Liskov Substitution Principle

---

![Liskov Substitution Principle](/images/liskov.png) <!--.element: style="margin: 0px auto" class="fragment" data-fragment-index="2" -->

> S subtypes T, what holds for T-objects holds for S-objects <!--.element: style="margin: 0px auto" class="fragment" data-fragment-index="3" -->

(Wikipedia) <!--.element: style="margin: 0px auto" class="fragment" data-fragment-index="3" -->

Note: Barbara Liskov is known for amazing works in computer programming and basically single-handed to invent data abstraction.



### The Liskov Substitution Principle

> Subtypes must be substitutable for their base types.

Note: When extending a class or implementing an interface, the new class must be able to replace the old class without changing the behavior of the program without unexpected consequences or side effects.



<!-- .element: data-auto-animate -->
<pre data-id="lsp-animation"><code data-line-numbers="2"><script type="text/template"><>
  <input value={search} onChange={changeSearch} />
  <ul>
    {dogs.map((dog) => (
      <DogCard key={dog.name} data={dog} />
    ))}
  </ul>
</>
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="lsp-animation"><code data-line-numbers="2"><script type="text/template"><>
  <SearchInput value={search} onChange={changeSearch} />
  <ul>
    {dogs.map((dog) => (
      <DogCard key={dog.name} data={dog} />
    ))}
  </ul>
</>
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="lsp1-animation"><code data-line-numbers="1-15"><script type="text/template">interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  )
}
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="lsp2-animation"><code data-line-numbers="1-15"><script type="text/template"><>
  <input
    value={search}
    onChange={changeSearch}
    placeholder="Search..."
  />
</>
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="lsp2-animation"><code data-line-numbers="1-15"><script type="text/template"><>
  <SearchInput
    value={search}
    onChange={changeSearch}
    placeholder="Search..."
  />
</>
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="lsp1-animation"><code data-line-numbers="1-15"><script type="text/template">interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  )
}
</script></code></pre>



<!-- .element: data-auto-animate -->
<pre data-id="lsp1-animation"><code data-line-numbers="1|1,6|1,6,13"><script type="text/template">interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (value: string) => void;
}

function SearchInput({ value, onChange, ...props }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
      {...props}
    />
  )
}
</script></code></pre>

Note: This principle is quite often violated by React developers, especially UI library authors. Sometime you found a cool shiny component but then realize it doesn't expose all the props you need. Then came patch-package so on. LSP is a really important principle to keep in mind when designing components.


### Q&A



### The Interface Segregation Principle

---

> Clients should not be forced to depend upon methods that they do not use. <!--.element: class="fragment" data-fragment-index="1" -->

(Robert C. Martin, Agile Software Development) <!--.element: class="fragment" data-fragment-index="1" -->

Note: Segregation - Tách biệt
From my personal point of view, this is a special case of the first one, Single Responsibility Principle, but a very important case.



##### It's the 90's and Xerox has a problem...

![Xerox 90s](/images/xerox.jpeg)



##### It's the 90's and Xerox has a problem...

<div style="text-align: left; font-size: 1.4rem;">

-> All of their software for printers uses a Job class, that is responsible for every type of job a printer can do. <!--.element: class="fragment fade-in" data-fragment-index="2" -->

-> Changes to the software were becoming impossible to manage as the Job class continued to grow with every new feature. <!--.element: class="fragment fade-in" data-fragment-index="3" -->

-> Robert C. Martin finds a solution. <!--.element: class="fragment fade-in" data-fragment-index="4" -->

-> New interfaces are written for each type of job that the printer can perform (i.e IStapleJob, IPrintJob, IScanJob, etc.). <!--.element: class="fragment fade-in" data-fragment-index="5" -->

-> New wrapper classes are written that implement these smaller interfaces: StapleJob implements IStapleJob, PrintJob implements IPrintJob, etc. <!--.element: class="fragment fade-in" data-fragment-index="6" -->

-> The wrapper classes call into the old Job class (which now implements all of the smaller interfaces). <!--.element: class="fragment fade-in" data-fragment-index="7" -->

-> New functionality for each job is written in smaller classes. <!--.element: class="fragment fade-in" data-fragment-index="8" -->

-> Finally, all of the clients for these jobs can use only the interfaces that they require. <!--.element: class="fragment fade-in" data-fragment-index="9" -->

</div>



<!-- .element: data-auto-animate -->
#### The Interface Segregation Principle

<pre data-id="isp-animation"><code data-line-numbers="1-14"><script type="text/template">interface Dog {
  name: string;
  image: string;
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <img src={data.image} alt='thumbnail' />
      <div>{data.name}</div>
    </li>
  );
}
</script></code></pre>



<!-- .element: data-auto-animate -->
#### The Interface Segregation Principle

<pre data-id="isp-animation"><code data-line-numbers="9,15-17"><script type="text/template">interface Dog {
  name: string;
  image: string;
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <DogThumbnail data={data} />
      <div>{data.name}</div>
    </li>
  );
}

function DogThumbnail({ data }: { data: Dog }) {
  return <img src={data.image} alt='thumbnail' className='my-thumbnail' />
}
</script></code></pre>



<!-- .element: data-auto-animate -->
#### The Interface Segregation Principle

<pre data-id="isp-animation"><code data-line-numbers="9,15-17"><script type="text/template">interface Dog {
  name: string;
  image: string;
}

function DogCard({ data }: { data: Dog }) {
  return (
    <li>
      <DogThumbnail image={data.image} />
      <div>{data.name}</div>
    </li>
  );
}

function DogThumbnail({ image }: { image: string }) {
  return <img src={image} alt='thumbnail' className='my-thumbnail' />
}
</script></code></pre>

Note: This also prevent unnecessary re-rendering in DogThumbnail component



#### React vs React DOM

The separation of React and ReactDOM into difference packages is a large-scale implementation of this principle. React is responsible for the virtual DOM and translating JSX, while ReactDOM does the heavy lifting of DOM manipulations.


### Q&A



### The Dependency Inversion Principle

> The Dependency Inversion Principle tells us that the most flexible systems are those in which source code dependencies refer only to abstraction, not to concretions. <!--.element: class="fragment" data-fragment-index="1" -->

(Robert C. Martin, Clean Architecture) <!--.element: class="fragment" data-fragment-index="1" -->



### The Dependency Inversion Principle

-> a/ High-level modules should not depend on low-level modules. Both should depend on abstractions. <!--.element: class="fragment" data-fragment-index="1" -->

-> b/ Abstractions should not depend on details. Details should depend on abstractions. <!--.element: class="fragment" data-fragment-index="2" -->

(Robert C. Martin, Agile Software Development) <!--.element: class="fragment" data-fragment-index="3" -->



### The Dependency Inversion Principle

---

<span style="text-decoration: underline">Common Cases:</span>

-> Component abstraction (i.e. forms, high-level buttons, etc. ) <!--.element: class="fragment" data-fragment-index="1" -->

-> Low-level 3rd party modules (i.e. date-fns, axios, etc.) <!--.element: class="fragment" data-fragment-index="2" -->

-> Persistent storage (i.e. localStorage, sessionStorage, etc.) <!--.element: class="fragment" data-fragment-index="3" -->



### The Dependency Inversion Principle

-> Unit test will be a lot easier <!--.element: class="fragment" data-fragment-index="1" -->

-> Components are not coupled to core libraries <!--.element: class="fragment" data-fragment-index="2" -->

-> Switching dependencies is efficient <!--.element: class="fragment" data-fragment-index="3" -->



## Tradeoffs

-> Increased complexity <!--.element: class="fragment" data-fragment-index="1" -->

-> Easy over-engineering <!--.element: class="fragment" data-fragment-index="2" -->

-> More abstraction <!--.element: class="fragment" data-fragment-index="3" -->



<img src="/images/stackoverflow-2.png" style="width: 100%" />

Note: My advice would be, when you make a decision, especially if it based on your personal preference or experience, try to answer not the "how", but the "why" question. Why we do what we do. Why we choose this over that. Why we don't do this. Why we don't choose that. And I hope this talk did help you in some.



### References

- [Applying Solid Principles in ReactJS](https://www.google.com/search?q=apply+solid+principles+reactjs)

- [Klaus Iglberger's Breaking Dependencies: The SOLID Principles](https://www.youtube.com/watch?v=Ntraj80qN2k)

- [Uncle Bob's Clean Code Lessons](https://www.youtube.com/watch?v=7EmboKQH8lM&list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj)

- [Zach Tellman's On Abstraction](https://www.youtube.com/watch?v=x9pxbnFC4aQ)

- [Hillel Wayne's What we can learn from software history](https://www.deconstructconf.com/2019/hillel-wayne-what-we-can-learn-from-software-history)

Note: Here are some resources that I found useful when researching for this talk. The first one is Google search result for applying solid principles in ReactJS. I found that it's very interesting because it's not a common topic when we talk about Coding Principle in Frontend Development. And so there are many difference understanding and implementation of each principle, some even misinterpreted. So try keep that in mind when you read those articles, and try to find as many angles when looking at a solution. I found that the comment session is usually very helpful.
The second one is where I literally stole most of the slides from. It's a more in-depth talk about software design and specifically: the SOLID principle. The talk even mention some conflicts that may happen between them.
The third one is Uncle Bob's Clean Code Lessons. This was a very foundational and inspiring talk about coding principle, and also about how far the sun is.
On Abstraction is the talk about abstraction.
The last explains how the world works, kind of. I try simplify it into this workshop epilogue, but I don't think I can do it justice. So I highly recommend you to watch the full talk.


### Q&A



## Thank you!

---

<img src="/images/solid-react.png" style="width: 200px; height: 200px; margin: 0px auto 40px;"/>

[https://solid-react.quocs.com](https://solid-react.quocs.com)
