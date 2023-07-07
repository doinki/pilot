import type { Meta, StoryObj } from '@storybook/react';

import NoFlashOutlined from '../../lib/places/NoFlashOutlined';

const meta: Meta<typeof NoFlashOutlined> = {
  component: NoFlashOutlined,
  tags: ['autodocs'],
  title: 'places/NoFlashOutlined',
};

export default meta;
type Story = StoryObj<typeof NoFlashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
