import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BALLIMG from "../assets/images/1.png";
import { fetchFixtures } from "../lib/fetch-data";
import { data } from "../lib/dummy-data";

const Fixture = () => {
  const params = useParams();
  const matchID = params.matchID;

  const results = data.response.filter((match) => match.fixture.id == matchID);

  const fixture = results[0];

  return (
    <div className="pb-10 bg-white">
      <div key={fixture.fixture.id} className="bg-white py-2">
        <div align="center">
          <img src={fixture.league.logo} width={25} alt="logo" />
          {fixture.league.name}
        </div>

        <div className="w-full flex p-1">
          <div className="w-[10%]" align="center">
            <img src={fixture.teams.home.logo} width={30} alt="home-logo" />
          </div>

          <div className="w-[32%] text-right">{fixture.teams.home.name}</div>

          <div className="w-[16%] text-center">
            {fixture.goals.home} : {fixture.goals.away}
          </div>

          <div className="w-[32%] text-left flex">
            {fixture.teams.away.name}
          </div>

          <div className="w-[10%]" align="center">
            <img src={fixture.teams.away.logo} width={30} alt="away-logo" />
          </div>
        </div>

        <div className="text-center text-green-600">
          {fixture.fixture.status.elapsed}`
        </div>
      </div>

      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className=" bg-gray-700 p-1 text-gray-300 text-xl">Events</h1>

        {!fixture.events
          ? null
          : fixture.events.map((event) => (
              <div className="p-5" key={event.team.id}>
                {event.type === "Goal" ? (
                  <div>
                    <img src={BALLIMG} width={15} alt="ball-img" />
                  </div>
                ) : (
                  <div className="badge badge-secondary">{event.type}</div>
                )}{" "}
                {event.player.name}{" "}
                <br />
                <hr />
                {event.player2.name}{" "}
                <img src={event.team.logo} width={20} alt="team-logo" />
                <br />
                <div className="text-green-700">{event.time.elapsed}</div>
              </div>
            ))}
      </div>

      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className=" bg-gray-700 p-1 text-gray-300 text-xl">Score</h1>

        <div className="p-2">
          First Half
          <br />
          {fixture.score.halftime.home} : {fixture.score.halftime.away}
        </div>

        {fixture.score.fulltime.home ? (
          <div className="p-2">
            Full Time
            <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        ) : null}

        {fixture.score.extratime.home ? (
          <div className="p-2">
            Extra Time
            <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
          </div>
        ) : null}

        {fixture.score.penalty.home ? (
          <div className="p-2">
            Extra Time
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        ) : null}
      </div>

      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className=" bg-gray-700 p-1 text-gray-300 text-xl">
          Match Details
        </h1>

        <div className="p-2">Stadium - {fixture.fixture.venue.name}</div>

        <div className="p-2">Referee - {fixture.fixture.referee}</div>
        <div className="p-2">Country - {fixture.league.country}</div>
        <div className="p-2">{fixture.league.round}</div>
        <div className="p-2">{fixture.league.season}</div>
      </div>

      <div className="text-center">
      <a href="https://www.instagram.com/mafion_06/"><i class='fa-brands fa-telegram'>JAMOA QOSHISH UCHUN </i></a>


      </div>
    </div>
  );
};

export default Fixture;
