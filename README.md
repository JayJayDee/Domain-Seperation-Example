# Domain-Seperation-Example
This example suggests a method of communicating only through an explicit interface between different domains. written with typescript.

# Disclaimer
I'm studying on Domain-Driven-Programming and trying to implement it without IoC libraries like TypeDI/Inversify. If you found a wrong usage or you have a better suggestion, writing it to an Issue is always welcome :)

# Domains
```
            StudyMapService
                   |
  (StudyUnitStatusMutator Interface)
                   |
            LearningService
```