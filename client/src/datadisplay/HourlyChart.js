import React from 'react';
import styled, { withTheme }  from 'styled-components';
import { Breakpoint } from 'react-socks';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryZoomContainer } from 'victory'
import { primaryColorFaded, textColor, dataAccentColor } from '../theme';
import moment from 'moment';

function formatViews(views) {
    if (views >= 1000000) {
        return String(views/1000000) + "M";
    } else if (views >= 1000) {
        return String(views/1000) + "k";
    } else {
        return views;
    }
}

function HourlyChart (props) {

    const StyledDivLarge = styled.div`
        height: 90%;
        width: 60%;
        box-shadow: 0.5rem 0.5rem 1rem 0.5rem ${primaryColorFaded};
        border-radius: 1rem;
        display: inline-block;
        margin: 2rem;
    `;

    const StyledDivSmall = styled.div`
        box-shadow: 0.5rem 0.5rem 1rem 0.5rem ${primaryColorFaded};
        border-radius: 1rem;
        margin: 1rem;
        padding: 1%;
    `;

    const StyledDivRight = styled.div`
        display: inline-block;
        box-shadow: 0.5rem 0.5rem 1rem 0.5rem ${primaryColorFaded};
        border-radius: 1rem;
        width: 30%;
        padding: 10%;
    `;

    const StyledTitle = styled.h4`
        text-align: center;
        padding: 1% 5%;
    `;

    let i;
    let data = [];
    for(i = 0; i < props.data.length; i++) {
        data.push({x: props.data[i]['datetime'], y: props.data[i]['viewCount']})
    }

    return (
        <div>
        <Breakpoint large up>
            <StyledDivLarge>
                <StyledTitle href="youtube.com">{props.title}</StyledTitle>
                <VictoryChart containerComponent={<VictoryZoomContainer />}>
                    <VictoryAxis
                        label="date - YYYMMDD HH:MM (KST)"
                        tickFormat={(x) => moment(x).utcOffset('+0900').format("YYYYMMDD HH:00")}
                        style={{
                            axis: {stroke: `${textColor({'theme': props.theme})}`},
                            axisLabel: {fontSize: 10, padding: 30},
                            grid: {stroke: ({ tick }) => `${dataAccentColor({'theme': props.theme})}`},
                            ticks: {stroke: `${textColor({'theme': props.theme})}`, size: 5},
                            tickLabels: {fontSize: 8, padding: 5}
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="views"
                        tickFormat={(y) => (`${formatViews(y)}`)}
                        style={{
                            axis: {stroke: `${textColor({'theme': props.theme})}`},
                            axisLabel: {fontSize: 10, padding: 30},
                            grid: {stroke: ({ tick }) => `${dataAccentColor({'theme': props.theme})}`},
                            ticks: {stroke: `${textColor({'theme': props.theme})}`, size: 5},
                            tickLabels: {fontSize: 8, padding: 5}
                        }}
                    />
                    <VictoryLine 
                        data={data}
                        animate={{ duration: 2000, onLoad: { duration: 1000 }}} 
                        style= {{ data: {stroke: `${textColor({'theme': props.theme})}`, strokeWidth: 1 }}}
                    />
                </VictoryChart>
            </StyledDivLarge>
        </Breakpoint>
        <Breakpoint large down>
        <StyledDivSmall>
        <StyledTitle href="youtube.com">{props.title}</StyledTitle>
            <VictoryChart containerComponent={<VictoryZoomContainer />}>
                <VictoryAxis
                    label="date - YYYMMDD HH:MM (KST)"
                    tickFormat={(x) => moment(x).utcOffset('+0900').format("YYYYMMDD HH:00")}
                    style={{
                        axis: {stroke: `${textColor({'theme': props.theme})}`},
                        axisLabel: {fontSize: 10, padding: 30},
                        grid: {stroke: ({ tick }) => `${dataAccentColor({'theme': props.theme})}`},
                        ticks: {stroke: `${textColor({'theme': props.theme})}`, size: 5},
                        tickLabels: {fontSize: 8, padding: 5}
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    label="views"
                    tickFormat={(y) => (`${formatViews(y)}`)}
                    style={{
                        axis: {stroke: `${textColor({'theme': props.theme})}`},
                        axisLabel: {fontSize: 10, padding: 30},
                        grid: {stroke: ({ tick }) => `${dataAccentColor({'theme': props.theme})}`},
                        ticks: {stroke: `${textColor({'theme': props.theme})}`, size: 5},
                        tickLabels: {fontSize: 8, padding: 5}
                    }}
                />
                <VictoryLine 
                    data={data}
                    animate={{ duration: 2000, onLoad: { duration: 1000 }}} 
                    style= {{ data: {stroke: `${textColor({'theme': props.theme})}`, strokeWidth: 1 }}}
                />
            </VictoryChart>
            </StyledDivSmall>
        </Breakpoint>
        </div>
    );
}

export default withTheme(HourlyChart);


  
