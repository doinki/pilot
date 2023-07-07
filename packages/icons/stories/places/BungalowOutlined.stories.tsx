import type { Meta, StoryObj } from '@storybook/react';

import BungalowOutlined from '../../lib/places/BungalowOutlined';

const meta: Meta<typeof BungalowOutlined> = {
  component: BungalowOutlined,
  tags: ['autodocs'],
  title: 'places/BungalowOutlined',
};

export default meta;
type Story = StoryObj<typeof BungalowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
