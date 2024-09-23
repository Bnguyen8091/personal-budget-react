import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const labels = ['Eating out', 'Grocery', 'Rent'];

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous contents

    const width = 300;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    svg.attr('width', width).attr('height', height);

    const x = d3.scaleBand()
      .domain(labels)
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg.append('g')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => x(labels[i]))
      .attr('y', d => y(d))
      .attr('height', d => y(0) - y(d))
      .attr('width', x.bandwidth())
      .attr('fill', (d, i) => {
        const colors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'];
        return colors[i];
      });
  }, [data]);

  return <svg ref={svgRef} viewBox="0 0 300 300"></svg>;
};

export default D3Chart;
