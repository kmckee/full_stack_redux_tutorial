import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import {expect} from 'chai';

import Voting from '../../src/components/Voting';

describe('Voting', () => {
    it('renders a pair of buttons', () => {
        const component = renderIntoDocument(<Voting pair={['Trainspotting', '28 Days Later']} />);

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons[0].textContent).to.equal('Trsainspotting');
        expect(buttons[1].textContent).to.equal('28 Days Later');
    });
});
