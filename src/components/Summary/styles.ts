import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    max-width: 100%;
    justify-content: space-between;
    gap: 1rem;

    margin-top: -9rem;
`

export const CardSummary = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    background-color: var(--shape);
    border-radius: 0.25rem;

    padding: 1.5rem 2rem;
    color: var(--text-title);

    &.highligth-color {
        background-color: var(--green);
        color: var(--shape);
    }
`

export const CardHeader = styled.header`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`

export const CardValue = styled.strong`
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 500;
`