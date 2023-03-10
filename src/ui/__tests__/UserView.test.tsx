import React from "react";
import { render, screen } from "@testing-library/react";
import UserView from "../UserView";

import { API } from "@aws-amplify/api";

describe("Testing UserView", () => {
  beforeAll(() => {
    API.configure = jest.fn().mockImplementation(() => [
      /**
       *
       */
    ]);

    API.graphql = jest.fn().mockImplementation(() =>
      Promise.resolve({
        data: {
          listZellerCustomers: {
            items: [
              {
                name: "testname",
                role: "ADMIN",
              },
              {
                name: "testname2",
                role: "MANAGER",
              },
            ],
          },
        },
      })
    );
  });

  test("render Userview", () => {
    render(<UserView />);
    const linkElement = screen.getByText("User Types");

    expect(linkElement).toBeInTheDocument();
  });
});
