import type { Meta, StoryObj } from '@storybook/react';

import RoundaboutRightOutlined from '../../lib/maps/RoundaboutRightOutlined';

const meta: Meta<typeof RoundaboutRightOutlined> = {
  component: RoundaboutRightOutlined,
  tags: ['autodocs'],
  title: 'maps/RoundaboutRightOutlined',
};

export default meta;
type Story = StoryObj<typeof RoundaboutRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
