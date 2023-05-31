---
image: https://loremflickr.com/640/360
priority: 100
author: Marvin Roman
title: Website Markdown Instructions
published: true
date: 2023-05-30
excerpt: Cheatsheet for markdown syntax that can be used to update or create pages.  
tags: ['how to', 'markdown', 'website']
draft: false
---


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

## Bold & Italics

**Syntax**

```markdown
**Lorem** *ipsum* _dolor_ __sit__ amet.
```  

**Output**

**Lorem** *ipsum* _dolor_ __sit__ amet.


## Blockquotes

**Syntax**

```markdown
> Tempor orci eu lobortis elementum nibh tellus molestie nunc. Risus commodo viverra maecenas accumsan lacus.
```

**Output**

> Tempor orci eu lobortis elementum nibh tellus molestie nunc. Risus commodo viverra maecenas accumsan lacus. 

## Highlighting

**Syntax**

```markdown
`Eget aliquet nibh praesent tristique magna sit`. Ut pharetra sit amet aliquam id diam. 
```

**Output**

`Eget aliquet nibh praesent tristique magna sit`. Ut pharetra sit amet aliquam id diam.  

## Lists

### Ordered(numbered) Lists

**Syntax**

```markdown
1. Cake bonbon shortbread macaroon muffin. Cupcake danish shortbread oat cake bear claw cupcake soufflé oat cake brownie. Soufflé tootsie roll cupcake muffin sweet roll.
2. Tart lollipop tiramisu biscuit sweet roll chocolate bar sugar plum ice cream bear claw. Gummies cake jelly-o carrot cake chupa chups ice cream. Sweet gingerbread soufflé donut wafer. 
```

**Output**

1. Cake bonbon shortbread macaroon muffin. Cupcake danish shortbread oat cake bear claw cupcake soufflé oat cake brownie. Soufflé tootsie roll cupcake muffin sweet roll.
2. Tart lollipop tiramisu biscuit sweet roll chocolate bar sugar plum ice cream bear claw. Gummies cake jelly-o carrot cake chupa chups ice cream. Sweet gingerbread soufflé donut wafer. 

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

## Strikethrough

**Syntax**

```markdown
~~That's right, he's gonna be mayor.~~
```

**Output**

~~That's right, he's gonna be mayor.~~

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

## Horizontal line

**Syntax**

```markdown
---
```

**Output**

---

## Change text color

To see more about colors go to the vuetify [documentation](https://vuetifyjs.com/en/styles/colors/).

**Syntax**

```markdown
[We are]{.text-grey-darken-4} the [Inland Empire]{.text-primary} [Chapter]{.text-primary-lighten-4} of the [Democratic]{.text-primary-darken-4} [Socialists]{.text-primary} of [America]{.text-blue}
```

**Output**

[We are]{.text-grey-darken-4} the [Inland Empire]{.text-primary} [Chapter]{.text-primary-lighten-4} of the [Democratic]{.text-primary-darken-4} [Socialists]{.text-primary} of [America]{.text-blue}

## Vuetify Components

### Button 

**Syntax**

```markdown
::vuetify-button{color="primary"}
Test button text
::
```

**Output**

::vuetify-button{color="primary"}
Test button text
::

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

::::vuetify-image
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

::::vuetify-image
---
src: "/images/area-map.jpg"
---
::::
:::
::

### Dividers

#### Vertical

**Syntax**

```markdown
:vuetify-divider{vertical=true}
```

#### Horizontal

**Syntax**

```markdown
:vuetify-divider{.my-4}
```

**Output**

:vuetify-divider{.my-4}

### Images

**Syntax**

```markdown
::vuetify-image
---
src: "/images/area-map.jpg"
contain: "true"
---
::
```

or 

```mardown
:vuetify-image{src: "/images/area-map.jpg" contain: "true"}
```

**Output**

:vuetify-image{src: "/images/area-map.jpg" contain: "true"}
