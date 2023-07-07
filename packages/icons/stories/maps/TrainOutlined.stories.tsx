import type { Meta, StoryObj } from '@storybook/react';

import TrainOutlined from '../../lib/maps/TrainOutlined';

const meta: Meta<typeof TrainOutlined> = {
  component: TrainOutlined,
  tags: ['autodocs'],
  title: 'maps/TrainOutlined',
};

export default meta;
type Story = StoryObj<typeof TrainOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
