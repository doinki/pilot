import type { Meta, StoryObj } from '@storybook/react';

import AirlineSeatIndividualSuiteOutlined from '../../lib/notification/AirlineSeatIndividualSuiteOutlined';

const meta: Meta<typeof AirlineSeatIndividualSuiteOutlined> = {
  component: AirlineSeatIndividualSuiteOutlined,
  tags: ['autodocs'],
  title: 'notification/AirlineSeatIndividualSuiteOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlineSeatIndividualSuiteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
