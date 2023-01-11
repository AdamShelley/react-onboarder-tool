# react-onboarding-tool

## Installation

Install with npm:

`npm install react-onboarding-tool`

Add to the highest level possible (encompassing all elements you want to be highlighted):

`import {OnboardingProvider} from 'react-onboarding-tool'`

And in every file you want to have a highlighted element also include:

`import {HighlighterWrapper} from 'react-onboarding-tool'`


These two components will work together to create the onboarding experience. 


## Usage 

The first step is to wrap the entire app/or the specific part you want to include the onboarding experience.

```
app.js

import {OnboardingProvider} from 'react-onboarding-tool'

<OnboardingProvider showOnboarding={true} onboardingData={dataFile} finishOnboarding={afterOnboarding}>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
       
</OnboardingProvider>
```

You will then wrap the elements that you wish to highlighted during the onboarding process.

```
app.js

import {OnboardingProvider, HighlighterWrapper} from 'react-onboarding-tool'

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

### Show Onboarding - ```showOnboarding (Boolean)```

This is the initial check to see if the module should run, it will only run with true.

This is where you could test some condition to run the module or not.

It is shared with the provider as in this example:

```
<OnboardingProvider showOnboarding={true}> 
```




### Data entry - ```onboardingData (Array)```

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

### Complete Onboarding - ```finishOnboarding (Function)```
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

## Styling 

### Onboarding Content

### Buttons
