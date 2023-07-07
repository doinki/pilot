import type { Meta, StoryObj } from '@storybook/react';

import DoorSlidingOutlined from '../../lib/search/DoorSlidingOutlined';

const meta: Meta<typeof DoorSlidingOutlined> = {
  component: DoorSlidingOutlined,
  tags: ['autodocs'],
  title: 'search/DoorSlidingOutlined',
};

export default meta;
type Story = StoryObj<typeof DoorSlidingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
