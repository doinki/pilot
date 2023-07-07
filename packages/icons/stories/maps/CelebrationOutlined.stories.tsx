import type { Meta, StoryObj } from '@storybook/react';

import CelebrationOutlined from '../../lib/maps/CelebrationOutlined';

const meta: Meta<typeof CelebrationOutlined> = {
  component: CelebrationOutlined,
  tags: ['autodocs'],
  title: 'maps/CelebrationOutlined',
};

export default meta;
type Story = StoryObj<typeof CelebrationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
