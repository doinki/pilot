import type { Meta, StoryObj } from '@storybook/react';

import StraightOutlined from '../../lib/maps/StraightOutlined';

const meta: Meta<typeof StraightOutlined> = {
  component: StraightOutlined,
  tags: ['autodocs'],
  title: 'maps/StraightOutlined',
};

export default meta;
type Story = StoryObj<typeof StraightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
