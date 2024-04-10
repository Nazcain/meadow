---
title: "Sample post"
date: 2024-03-09
author: Joanna Rutkowska
authorImage: https://golem.foundation/assets/img/team/joanna.jpg
authorUrl: https://golem.foundation/team#joanna-rutkowska
description: "Wildland seeks to offer a viable alternative to bundled, closed services. But why is such a change so important in the first place? Our current digital environment is far from a wild, freely expanding forest of knowledge, but we see an opportunity for change by targeting an array of interlinked challenges."
shortDescription: "Praesent maximus risus quam, id bibendum tortor ultrices nec."
---

On behalf of the whole [team][team], I'm proud to announce the first public release of Wildland client! This is a reference implementation of the Wildland protocol, which we have described in our ["Why, What and How" (aka W2H) paper][w2h].

Leaving aside all the usual disclaimers about how early-beta and for-power-users-only this version really is, I'd like to focus on what's already working and possible :)

## The client functionality

Here’s a sample footnote.[^1] Firstly, you can connect multiple storage backends (S3 buckets, WebDAV servers, Dropbox accounts, etc) and expose them all as _one unified file system_ as shown on the screenshot below. We believe that this is how data management should really be done. Users should not be concerned with which service provider their data is currently being held on. Instead, we should be able to address our data using infrastructure-agnostic addressing. Whether our files live on my Dropbox, local NAS, some p2p-synced storage, or on my local disk, should be of secondary importance, and should not be included in addressing of the data.

[^1]: Data has become a fully-fledged layer of our existence and there’s no indication that this is about to change.

Secondly, Wildland natively implements what we call [multi-categorization][multicat]. This means that every data container (the smallest unit of information on Wildland) can be assigned more than one address/path and can be accessed using any of them. Functionality-wise this is similar to having a directory on a traditional filesystem with multiple links, except that on Wildland every path is a first-class citizen. We believe that this feature is vital in making filesystems powerful enough to allow for their use as a primary tool for information and knowledge management. This is a broad and exciting topic and we will be talking more about it in future posts.

Finally, the third highlight of this release is support for what we call [cascading addressing][addressing]. It can be thought of as an "upside-down DNS", or a bottom-up scalable addressing scheme which does not require any centralized authority, like predefined DNS root servers. It's important to note that this addressing scheme does not require any blockchain either.

## More footnotes

Another footnote.[^2] Since we often assume decentralization to be the only answer to ensuring data privacy, we have seen an emergence of many decentralized data storage projects, such as IPSF, Filecoin, Sia, and Safe Network. Wildland isn’t trying to compete with these projects. It aims to bring an aspect of functionality and [pragmatism to data storage decentralization](https://hackernoon.com/we-want-functional-decentralization-qanda-with-wildland-developers-ub2o31pt), by putting the emphasis on flexibility and enabling the user to use any infrastructure they wish and to switch seamlessly between different backends.

[^2]:
    We have the necessary [know-how][team], an experienced team and the resources needed to build a viable _alternative_ to the current service-based model of the Internet in which Big Tech companies can roam free.

    Another paragraph, but most importantly we have the interests of people like you at heart.

It is important to remember here that decentralization within an organization itself comes with its own challenges. Firstly, people tend to be passive and often need an incentive to participate in the infrastructure-building process. Secondly, it can be difficult to determine who gets to decide on how the project should be advanced. There’s also the challenge of open source decentralized data storage projects being too niche which prevents them from becoming viable alternative solutions to bundled, closed and monetized services. This means there is a need to build a feasible economic framework to make Wildland a real alternative.

## Text formatting

With Wildland the user’s data is no longer stuck in a closed silo but stored in containers which can be easily moved between **different backends**, thanks to decoupling the addressing layer from the actual storage, and allowing for the creation of a bottom-up “organic” architecture. Making Wildland _faster_ -- primarily optimized mounting of large forests, as well as adding mechanisms for container content caching. This is a sample ~~strikethrough text~~.

## Ordered lists

### With spacing

Aside from today's release of the client, we're also opening up for public read-only access [two Wildland forests][demo-forests] (a _forest_ is a namespace built around one user identity):

1. The _Pandora_ forest (a reference to the Avatar movie), which is a repository of memos, reports, documents, etc, which we've been using internally to help us with Wildland's development. It's a bit like a shared Dropbox folder, except that it uses abstracted storage and heavily utilizes multi-categorization.

2. The _Ariadne_ forest, which is a very small forest containing bridges to other forests, specifically to the Pandora forest, and some other, internal forests, which are encrypted and not exposed for public use.

### No spacing

1. Sed venenatis arcu ac metus pharetra, nec aliquam libero scelerisque.
2. Nullam sit amet dolor varius, aliquam neque sit amet, scelerisque tortor.
3. Suspendisse eget lacus ultricies, vulputate erat vel, sodales erat.
4. Nullam consequat libero in sodales hendrerit.

### Nested

1. First main item
   1. Sub-item 1
   2. Sub-item 2
2. Second main item
   1. Sub-item A
   2. Sub-item B
      1. Sub-sub-item i
      2. Sub-sub-item ii
3. Third main item

## Unordered lists

There are more exciting things ahead of us which we plan to bring to you in the upcoming releases. These can be generally grouped into three areas:

- Making Wildland _easier to use_ and set up. This means: better integration on various platforms, easy-to-use GUI, and -- last but not least -- an Ethereum-based marketplace for storage, followed by user-centered governance and GLM integration, as described in the [W2H paper][w2h].

- Making Wildland _faster_ -- primarily optimized mounting of large forests, as well as adding mechanisms for container content caching.

- Making Wildland _more universal_, which includes better integration with more storage backends, integration with various data sources, as well as adding support for compute backends attached to containers, allowing them to actively process the data inside containers.

Our ultimate goal is to provide a set of tools for a user to be able to better manage their digital universe of information. And do so on their own terms, rather than remaining dependent on large service providers to that on behalf of us all.

- Main item 1
  - Sub-item A
  - Sub-item B
- Main item 2
  - Sub-item X
  - Sub-item Y

If you would like to try Wildland today, we suggest you start with [this introduction][intro], which is then followed by step-by-step tutorials on how to mount and explore the above-mentioned demo forests, as well as perform many other tasks using Wildland.

## Task lists

**Eligibility Criteria** are also essential, so make sure to review them to ensure that your project aligns with what's listed below.

- [x] Do you have a commitment to open-source (i.e. every open-source license accepted by the [Open-Source Initiative](https://opensource.org/licenses/)) technology and sharing results publicly?
- [ ] Have you provided transparency about how exactly funding will be used?
- [ ] Are you advancing values of freedom and privacy (no surveillance and handling of personal data)?
- [ ] Are you supporting decentralization in various fields (for example building [Web3 projects](https://ethereum.org/en/web3/))?
- [ ] Have you provided social media channels to the extent that we can confirm social proof of your project?

## Tables

| Fruit      | Color  | Taste | Availability |
| ---------- | ------ | ----- | ------------ |
| Apple      | Red    | Sweet | Year-round   |
| Banana     | Yellow | Sweet | Year-round   |
| Orange     | Orange | Tangy | Winter       |
| Grape      | Purple | Sweet | Year-round   |
| Strawberry | Red    | Sweet | Summer       |

## Code

If a user locks `100 GLM` at the beginning of Epoch One and later adds 1000 GLM in the middle of that epoch, their resulting voting power will be proportional to `600 GLM`.

```swift
init(
    sourceContainerID: ContainerID,
    relativeURL: URL,
    pathResolver: PathResolver,
    name: String? = nil,
    persistentContainers: PersistentContainers
) throws
```

## Images and videos

When I was introduced to the web3 space, I noticed numerous discussions about incentivizing people to join and participate in community projects. It sometimes sounds like a key solution to all problems - if we find the right incentives, everything will fall into place, and our project will be successful.

Although I may not have extensive experience in technology, I believe I possess a solid understanding of how communities and social movements function, and how to engage people in supporting causes. Therefore, I've decided to share some thoughts on this topic.

![Forest](forest.jpg)[^3]

[^3]: Think of a wild forest, untouched by civilization. What do you feel?

This says something really cool about humanity. We care about others and are happy to support them in need. We like to buy and get cool stuff, but sometimes we are even more excited about giving to see some meaningful change in the world. Or, if we can’t change the world, at least helping to change it for this one person or animal.

<video src="/videos/video.mp4" controls></video>[^4]

[^4]: Wildland is about more than simply offering an alternative: it’s about trying to change the whole paradigm.

Most people associate crowdfunding with platforms such as Kickstarter, where certain niches, such as gaming, have integrated it into their business models, essentially pre-selling products during crowdfunding campaigns. This approach is intuitively appealing: the company receives funds while clients obtain products, aligning with conventional commerce expectations.

[team]: https://wildland.io/team
[w2h]: https://golem.foundation/resources/documents/wildland-w2h.pdf
[intro]: https://docs.wildland.io/#a-practical-introduction-to-wildland
[demo-forests]: https://docs.wildland.io/user-guide/public-forests.html
[addressing]: https://docs.wildland.io/#container-addressing
[multicat]: https://docs.wildland.io/#multi-categorization
