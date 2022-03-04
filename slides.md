---
title: Mercator workshop
titleTemplate: '%s'
favicon: 'https://www.dnsbelgium.be/themes/custom/drupack/favicon.png'

theme: seriph
highlighter: shiki
lineNumbers: false

info: |
  ## Mercator workshop

  Presentation slides for [Mercator](https://github.com/DNSBelgium/Mercator). This is a hands-on workshop in order to
  quickly setup the needed infrastructure on AWS.

drawings:
  persist: false

fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

background: /cover1.jpeg
hideInToc: true
---


# Mercator

DNS Belgium's crawler

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://dnsbelgium.be" target="_blank" alt="DNS Belgium" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <img width="100" height="110" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8EAAAEuCAYAAACuxRB+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0NEMwMjcxMjdEQjExRTY5MDRFRTRENkU2REMxQTJCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0NEMwMjcwMjdEQjExRTY5MDRFRTRENkU2REMxQTJCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzkxODM4MDktODg0NC00MTQ0LTk3NjAtYzAzZmVkZTI3YjJjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlk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" alt="DNS Belgium" />
  </a>
  <a href="https://github.com/DNSBelgium/Mercator" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
hideInToc: true
---

# Table of contents

<Toc class="mytoc" columns="1" maxDepth="1" minDepth="1" mode="all" />

---
layout: intro
---

# DNS Belgium

---
layout: intro
---

# Mercator Design goals

Mercator was built with severals goals in mind

* 💪 **Robustness**: Components should gracefully handle the unexpected
* 🐘 **Scalability**: Crawl .be zone (1.7M domains) in 24 hours
* 🤸 **Extensibility**: New components should not disrupt the working of other components
* 🔍 **Observability**: Be able to quickly spot
  * 🚴 performance issues
  * 💥 functional issues

---
layout: two-cols
---

## Architecture

* Event driven
* Dispatcher
  * Reads work from input queue
  * Dispatches work to all modules (no pub-sub)
* Each crawler module
  * Can be scaled independently from other modules
  * Reads work from its message queue
  * 1 message = 1 domain name = 1 transaction
  * Stores its results in its own DB schema and/or S3 bucket
  * Sends an ACK to its output queue
  * Separates fetching from processing

::right::

<img src="/images_mercator_architecture.png" alt="Mercator Architecure" class="m-0 h-110 w-110">

---
layout: two-cols
---

## Technology

* Amazon SQS => automatic retries + DLQ
* Spring Boot (Java) + NodeJS (TypeScipt) + Python + Scikit-learn
* PostgreSQL
* Raw HTML and screenshots on S3
* Infra managed with Terraform
* Deployed on Kubernetes using Helm => self-healing
* Continuous Delivery using Jenkins pipelines
* Local development using docker-compose
* Grafana & Prometheus

::right::

## Functionality

* Use headless chrome to take screenshots + fetch HTML
* Fetches DNS records
* Geo IP on A & AAAA
* Detects over 950 web technologies using Wappalyzer
* Talks SMTP
* VAT crawler (follows links until VAT found or max depth)
* Extract HTML features (#social media links, …)
* Language detection
* REST API + basic UI

---

## Dashboarding

TODO

---
layout: cover
dim: false
background: /dariusz-sankowski.jpg
---

# Build Mercator

<style>
h1 {
  @apply absolute top-35 left-80 text-black;
}
</style>

---

## Requirements

You will need several things to build mercator

* Java 17
* Helm 3

```shell
git clone https://github.com/DNSBelgium/mercator.git
cd mercator
./gradlew build -x test
```

<div>
If you want to run the tests, you also need Docker and a Maxmind license (see <a @click="$slidev.nav.next">Maxmind</a>).
</div>

---

## Maxmind

Create a Maxmind account and generate a license key for Mercator. [^1]

```shell
cat > .env <<EOF
MAXMIND_LICENSE_KEY=mysecretkey
EOF
```


[^1]: [Source](https://support.maxmind.com/hc/en-us/articles/4407111582235-Generate-a-License-Key)

---
layout: cover
dim: false
background: /cover_docker3.jpg
---

# Deploy Mercator using docker-compose

<style>
h1 {
  @apply absolute top-10;
}
</style>

---

## Docker-compose

_Docker Compose [^1] is a tool for defining and running multi-container Docker applications.
A YAML file definition contains the definition of the application’s services.
With a single command, you create and start all the services from your configuration._

##### Installation

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version # docker-compose version 1.29.2, build 5becea4c
```

##### Run Mercator

```shell
cd mercator
./gradlew dockerBuild # Create local docker images
docker-compose up -d localstack db
```

[^1]: [Docker Compose](https://docs.docker.com/compose/)

---
layout: cover
background: https://sli.dev/demo-cover.png
---

# Deploy Mercator in the cloud

---


## Deploy Mercator in the cloud

AWS

Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.

##### SQS

queues

##### EKS

Kubernetes Cluster

##### S3

Storage

---

## Deploy Mercator in the cloud

Terraform

Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files.



------

## Deploy Mercator in the cloud

Cloud9

cloud9


---------

## Deploy Mercator in the cloud

Create the basic infrastructure needed for Mercator (25m).

This create the network space and the kubernetes cluster.

```shell
git clone blabla
cd mercator-infra-tf-aws
terraform init
terraform apply
```

---

## Helm

What is Helm ? What is a Helm chart ?

```shell
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh 
helm version # version.BuildInfo{Version:"v3.8.0", GitCommit:"d14138609b01886f544b2025f5000351c9eb092e", GitTreeState:"clean", GoVersion:"go1.17.5"}
```

---

## Dashboarding

---
layout: center
class: text-center
---

# Learn More

[DNS Belgium](https://dnsbelgium.be) · [Mercator GitHub](https://github.com/DNSBelgium/Mercator)
