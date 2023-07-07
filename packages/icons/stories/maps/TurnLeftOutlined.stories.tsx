import type { Meta, StoryObj } from '@storybook/react';

import TurnLeftOutlined from '../../lib/maps/TurnLeftOutlined';

const meta: Meta<typeof TurnLeftOutlined> = {
  component: TurnLeftOutlined,
  tags: ['autodocs'],
  title: 'maps/TurnLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof TurnLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
