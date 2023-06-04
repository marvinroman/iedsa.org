---

image: https://loremflickr.com/640/360
priority: 100
author: Marvin Roman
title: Website Markdown Instructions
date: 2023-05-30
tags: ['how to', 'markdown', 'website']
draft: false
navigation: false

---

Cheatsheet for markdown syntax that can be used to update or create pages. 

<!--more-->

## Headings 

Headings will automatically generate a table of contents for levels 2 & 3.

```markdown
# Heading 1
```

# Heading 1

```markdown
## Heading 2
```

## Heading 2

```markdown
### Heading 3
```

### Heading 3

```markdown
#### Heading 4
```

#### Heading 4

```markdown
##### Heading 5
```

##### Heading 5

```markdown
###### Heading 6
```

###### Heading 6

```markdown
[link](https://iedsa.org)
```

[link](https://iedsa.org)

```markdown
![image](https://dummyimage.com/640x360/fff/aaa)
```

![image](https://dummyimage.com/640x360/fff/aaa)

:spacer

## Bold & Italics

**Syntax**

```markdown
**Lorem** *ipsum* _dolor_ __sit__ amet.
```  

**Output**

**Lorem** *ipsum* _dolor_ __sit__ amet.

:spacer

## Blockquotes

**Syntax**

```markdown
> Tempor orci eu lobortis elementum nibh tellus molestie nunc. Risus commodo viverra maecenas accumsan lacus.
```

**Output**

> Tempor orci eu lobortis elementum nibh tellus molestie nunc. Risus commodo viverra maecenas accumsan lacus. 

:spacer

## Highlighting

**Syntax**

```markdown
`Eget aliquet nibh praesent tristique magna sit`. Ut pharetra sit amet aliquam id diam. 
```

**Output**

`Eget aliquet nibh praesent tristique magna sit`. Ut pharetra sit amet aliquam id diam.  

:spacer

## Lists

:spacer

### Ordered(numbered) Lists

**Syntax**

```markdown
1. Cake bonbon shortbread macaroon muffin. Cupcake danish shortbread oat cake bear claw cupcake soufflé oat cake brownie. Soufflé tootsie roll cupcake muffin sweet roll.
2. Tart lollipop tiramisu biscuit sweet roll chocolate bar sugar plum ice cream bear claw. Gummies cake jelly-o carrot cake chupa chups ice cream. Sweet gingerbread soufflé donut wafer. 
```

**Output**

1. Cake bonbon shortbread macaroon muffin. Cupcake danish shortbread oat cake bear claw cupcake soufflé oat cake brownie. Soufflé tootsie roll cupcake muffin sweet roll.
2. Tart lollipop tiramisu biscuit sweet roll chocolate bar sugar plum ice cream bear claw. Gummies cake jelly-o carrot cake chupa chups ice cream. Sweet gingerbread soufflé donut wafer. 

:spacer

### Unordered Lists

**Syntax**

```markdown
- Brigantine flogging keel American Main sloop bowsprit measured fer yer chains draught jib black jack.    
- Shiver me timbers Spanish Main heave down scurvy parrel port starboard Chain Shot lugger to go on account.  
```

or 

```markdown
* Brigantine flogging keel American Main sloop bowsprit measured fer yer chains draught jib black jack.    
* Shiver me timbers Spanish Main heave down scurvy parrel port starboard Chain Shot lugger to go on account.  
```

**Output**

- Brigantine flogging keel American Main sloop bowsprit measured fer yer chains draught jib black jack.    
- Shiver me timbers Spanish Main heave down scurvy parrel port starboard Chain Shot lugger to go on account.    

:spacer

### Task Lists

**Syntax**

```markdown
- [ ] About 30 years, it's a nice round number.
- [ ] Oh, I sure like her, Marty, she is such a sweet girl. Isn't tonight the night of the big date?
- [x] Its good.
```

**Output**

- [ ] About 30 years, it's a nice round number.
- [ ] Oh, I sure like her, Marty, she is such a sweet girl. Isn't tonight the night of the big date?
- [x] Its good.

:spacer

## Strikethrough

:spacer

**Syntax**

```markdown
~~That's right, he's gonna be mayor.~~
```

**Output**

~~That's right, he's gonna be mayor.~~

:spacer

## Tables

**Syntax**

```markdown
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 
```

**Output**

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 

:spacer

## Code Block

**Syntax**

~~~markdown
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
~~~

**Output**

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
``` 

:spacer

## Horizontal line

:spacer

**Syntax**

```markdown
---
```

**Output**

---

:spacer

## Change text color

To see more about colors go to the vuetify [documentation](https://vuetifyjs.com/en/styles/colors/).

**Syntax**

```markdown
[We are]{.text-grey-darken-4} the [Inland Empire]{.text-primary} [Chapter]{.text-primary-lighten-4} of the [Democratic]{.text-primary-darken-4} [Socialists]{.text-primary} of [America]{.text-blue}
```

**Output**

[We are]{.text-grey-darken-4} the [Inland Empire]{.text-primary} [Chapter]{.text-primary-lighten-4} of the [Democratic]{.text-primary-darken-4} [Socialists]{.text-primary} of [America]{.text-blue}

:spacer

## Vertical Spacer

To create vertical spacing between elements, defaults to 4, can be set to any number between 0-16. 

**Syntax**

```markdown
:spacer
:spacer{height=8}
```

:spacer

## Vuetify Components

:spacer

### Button 

To learn more about button API you can review the [documentation](https://vuetifyjs.com/en/api/v-btn/). 

Most props are available and any hyphen separated names like `append-icon` will instead be `appendIcon`.  

**Syntax**

```markdown
::vuetify-btn
Normal
::
::vuetify-btn{variant="text"}
Text Variant
::
::vuetify-btn{to="/" color="anchor"}
Home
::
::vuetify-btn{href="https://act.dsausa.org/donate/membership" blank=true color="primary"}
Join
::
```

**Output**
::vuetify-btn
Normal
::
::vuetify-btn{variant="text"}
Text Variant
::
::vuetify-btn{to="/" color="anchor"}
Home
::
::vuetify-btn{href="https://act.dsausa.org/donate/membership" blank=true color="primary"}
Join
::

:spacer

### Columns

**Syntax**

```markdown
::vuetify-row{.mt-4}

:::vuetify-col{.column-2}
We are the [Inland Empire]{.text-primary} Chapter of the [Democratic Socialists of America]{.text-primary}

Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Nibh tortor id aliquet lectus proin. Porttitor eget dolor morbi non arcu. Sit amet purus gravida quis blandit turpis cursus. Orci dapibus ultrices in iaculis nunc. Aenean pharetra magna ac placerat vestibulum.
:::

  :vuetify-divider{vertical=true}

:::vuetify-col{.column-2}

::::vuetify-img
---
src: "/images/area-map.jpg"
---
::::
:::
::
```

**Output**

::vuetify-row{.mt-4}

:::vuetify-col{.column-2}
We are the [Inland Empire]{.text-primary} Chapter of the [Democratic Socialists of America]{.text-primary}

Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Nibh tortor id aliquet lectus proin. Porttitor eget dolor morbi non arcu. Sit amet purus gravida quis blandit turpis cursus. Orci dapibus ultrices in iaculis nunc. Aenean pharetra magna ac placerat vestibulum.
:::

  :vuetify-divider{vertical=true}

:::vuetify-col{.column-2}

::::vuetify-img
---
src: "/images/area-map.jpg"
---
::::
:::
::

:spacer

### Dividers

:spacer

#### Vertical

**Syntax**

```markdown
:vuetify-divider{vertical=true}
```

:spacer

#### Horizontal

**Syntax**

```markdown
:vuetify-divider{.my-4}
```

**Output**

:vuetify-divider{.my-4}

:spacer

### Images

For full reference of props available in the images API see [documentation](https://vuetifyjs.com/en/api/v-img/). 

Hyphen seperated props like `aspect-ratio` will become `aspectRatio`.  

**Syntax**

```markdown
::vuetify-img
---
src: "/images/area-map.jpg"
contain: true
---
::
```

or 

```markdown
:vuetify-img{src="/images/area-map.jpg" contain=true height=300}
```

**Output**

:vuetify-img{src="/images/area-map.jpg" contain=true height=300}

:spacer 

### Tables

For full reference of props available in the tables API see [documentation](https://vuetifyjs.com/en/api/v-table/). 

Hyphen seperated props like `fixed-footer` will become `fixedFooter`.  

**Syntax**

```markdown
::vuetify-table{density="compact"}
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 
::
::vuetify-table{hover=true}
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 
::
::vuetify-table{theme="dark" density="compact" hover=true}
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 
::
```

::vuetify-table{density="compact"}
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 
::

:spacer

::vuetify-table{hover=true}
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 
::

:spacer

::vuetify-table{theme="dark" density="compact" hover=true}
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 
::

### Cards

For full reference of props available in the cards API see [documentation](https://vuetifyjs.com/en/api/v-card/). 

Hyphen seperated props like `append-avatar` will become `appendAvatar`.  

```markdown
::vuetify-card{theme="dark"}

Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Nibh tortor id aliquet lectus proin. Porttitor eget dolor morbi non arcu. Sit amet purus gravida quis blandit turpis cursus. Orci dapibus ultrices in iaculis nunc. Aenean pharetra magna ac placerat vestibulum.

#title
Test title

#subtitle
Test subtitle

#actions
  :vuetify-spacer
::vuetify-btn{color="success" appendIcon="mdi-arrow-collapse-down"}
Submit
::

::
```


::vuetify-card{theme="dark"}

Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pretium fusce id velit ut tortor pretium viverra suspendisse. Nibh tortor id aliquet lectus proin. Porttitor eget dolor morbi non arcu. Sit amet purus gravida quis blandit turpis cursus. Orci dapibus ultrices in iaculis nunc. Aenean pharetra magna ac placerat vestibulum.

#title
Test title

#subtitle
Test subtitle

#actions
  :vuetify-spacer
::vuetify-btn{color="success" appendIcon="mdi-arrow-collapse-down"}
Submit
::

::

### Expansion Panel

For full reference of props available in the expansion panels API see [documentation](https://vuetifyjs.com/en/api/v-expansion-panels/). 

For full reference of props available in the expansion panel API see [documentation](https://vuetifyjs.com/en/api/v-expansion-panel/). 

Hyphen seperated props like `append-avatar` will become `appendAvatar`.  


```markdown
::vuetify-expansion-panels

:::vuetify-expansion-panel
Nibh tortor id aliquet lectus proin. Porttitor eget dolor morbi non arcu.

#title
Nibh tortor
:::
:::vuetify-expansion-panel{title="Orci dapibus" color="grey"}
Orci dapibus ultrices in iaculis nunc. Aenean pharetra magna ac placerat vestibulum.
:::
::
```

::vuetify-expansion-panels

:::vuetify-expansion-panel
Nibh tortor id aliquet lectus proin. Porttitor eget dolor morbi non arcu.

#title
Nibh tortor
:::
:::vuetify-expansion-panel{title="Orci dapibus" color="grey"}
Orci dapibus ultrices in iaculis nunc. Aenean pharetra magna ac placerat vestibulum.
:::
::