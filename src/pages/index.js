import React from "react"
import { Helmet } from "react-helmet"
import { render, Comment } from "minista"

import AppLayout from "../components/AppLayout"

const Page = () => {
  return render(
    <AppLayout>
      <Helmet>
      </Helmet>
      <Comment text="Comment Test" />
      <h1>Hello</h1>
    </AppLayout>
  )
}

export default Page
