# react-onboarder-tool

This is a component for React that will provide a tutorial for users when accessing your site.

It is composed of two parts: 
    - A guide modal, that steps the users through the onboarding process
    - A highlighting Wrapper that will highlight the element of your website at the correct step.


## Installation

Install with npm:

`npm install react-onboarder-tool`

Add to the highest level possible (encompassing all elements you want to be highlighted):

`import {OnboardingProvider} from 'react-onboarder-tool'`

And in every file you want to have a highlighted element also include:

`import {HighlighterWrapper} from 'react-onboarder-tool'`


These two components will work together to create the onboarding experience. 

***
## Usage 

The first step is to wrap the entire app/or the specific part you want to include the onboarding experience.

```
app.js

import {OnboardingProvider} from 'react-onboarder-tool'

<OnboardingProvider showOnboarding={true} onboardingData={dataFile} finishOnboarding={afterOnboarding}>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
       
</OnboardingProvider>
```

You will then wrap the elements that you wish to highlighted during the onboarding process.

```
app.js

import {OnboardingProvider, HighlighterWrapper} from 'react-onboarder-tool'

<OnboardingProvider showOnboarding={true} onboardingData={dataFile} finishOnboarding={afterOnboarding}>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HighlightWrapper step={1} width={"50%"}>
            <p>Edit <code>src/App.js</code> and save to reload.</p>
        </HighlightWrapper>
       
</OnboardingProvider>
```


## Onboarding Provider

There are 3 main props to share with the provider, those being the boolean check to load the onboarding module, the data for each step, and the function to run when the onboarding has finished. 

### Show Onboarding - `showOnboarding (Boolean)`

This is the initial check to see if the module should run, it will only run with true.

This is where you could test some condition to run the module or not.

It is shared with the provider as in this example:

```
<OnboardingProvider showOnboarding={true}> 
```


### Data entry - `onboardingData (Array)`

Data is added through the prop: `onboardingData` on the `OnboardingProvider` component. 

It should be structured as an array of objects like the following: 


``` 
const onboardingData = [
    {
        step: 0,
        title: 'This is a title.',
        description: 'This is a description.'
    },
    {
        step: 1,
        title: 'This will be the second title.',
        description: 'This will be the second description.'
    } ... etc
]
```

This is then added to the component:

```
<OnboardingProvider onboardingData={onboardingData}> 
```

If you wish to leave title and/or description empty, provide an empty string ```""```

### Complete Onboarding - `finishOnboarding (Function)`
This is an optional function that will run after the onboarding has completed, perhaps to update your backend that the user has completed the onboarding or to reroute to a different page.

This is provided to the component in the same way as before:

```
<OnboardingProvider finishOnboarding={**Function-to-run-when-complete**}> 
```

## Highlighter Wrapper
The other component that goes hand in hand with the provider is the wrapper. 

This component has props you will have to modify to suit your experience.

### Step - (number)
This is required to order the steps correctly, the number you provide here will corrospond to the step you use in the `onboardingData = []` array. 

### Width - (CSS)
This can be used to tweak the the width of the box around the item you are highlighting. The default is `'100%'`

***
## Styling 

### Onboarding Positioning
The position of the Modal can be changed each step if required, this is modified in the data file you provided with the step data.

``` 
const onboardingData = [
    {
        step: 0,
        title: 'This is a title.',
        description: 'This is a description.',

        <!-- TOP and LEFT can be modified to change location -->
        top: '40%',
        left: '30%'
    },
    {
        step: 1,
        ...etc
    } 
]
```

if omitted the modal will be placed near the middle of the page.


### Onboarding Content
There is an options prop available on the OnboarderProvider in which basic CSS can be modified.

`<OnboarderProvider options={YOUR_OBJECT}>`

```
const YOUR_OBJECT = {
    overlay: {
        backgroundColor: 'black',
        opacity: 0.3
    },
    modal: {
        fontFamily: "Helvetica", 
        fontWeight: "600", 
        titleFontSize: "2rem", 
        descriptionFontSize: "1rem", 
        border: "1px solid #eeeeee",
        backgroundColor: "#15161b",
        borderRadius: "2px", 
        padding: "2rem",
        color: "#eee", 
        width: "25%",
        height: "25%",
    }
}
```

### Buttons

Using the same object as above the button can be modified with the following properties:

```
const YOUR_OBJECT = {
    overlay: {
        ...overlay styles
    },
    modal: {
        ...modal styles
    },
    button: {
        fontFamily: "Helvetica",
        fontWeight: "600",
        fontSize: "1rem", 
        backgroundColor: "#eee", 
        color: "#15161b", 
        border: "2px solid #eee", 
        borderRadius: "2px",
        hoverBackgroundColor: "#15161b",
        hoverColor: "#eeeeee",
        hoverBorder: "1px solid #eeeeee",
        hoverTransition: "all .5s ease-in-out",
  }
}
```

### Highlighter Wrapper

Using the options prop on the HighlighterWrapper you can do the same to the highlighted items.

`<HighlightWrapper options={highlightOptions}>`

```
const highlightOptions = {
  border: "1px solid darkgrey",
  borderRadius: "2px",
  backgroundColor: "grey",
  color: "#eee",
  padding: "1rem",
};
```
