import type { Meta, StoryObj } from '@storybook/react';

import TurnedInOutlined from '../../lib/action/TurnedInOutlined';

const meta: Meta<typeof TurnedInOutlined> = {
  component: TurnedInOutlined,
  tags: ['autodocs'],
  title: 'action/TurnedInOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnedInOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
