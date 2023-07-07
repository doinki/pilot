import type { Meta, StoryObj } from '@storybook/react';

import GiteOutlined from '../../lib/places/GiteOutlined';

const meta: Meta<typeof GiteOutlined> = {
  component: GiteOutlined,
  tags: ['autodocs'],
  title: 'places/GiteOutlined',
};

export default meta;
type Story = StoryObj<typeof GiteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
