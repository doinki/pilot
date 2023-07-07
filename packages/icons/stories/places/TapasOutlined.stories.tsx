import type { Meta, StoryObj } from '@storybook/react';

import TapasOutlined from '../../lib/places/TapasOutlined';

const meta: Meta<typeof TapasOutlined> = {
  component: TapasOutlined,
  tags: ['autodocs'],
  title: 'places/TapasOutlined',
};

export default meta;
type Story = StoryObj<typeof TapasOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
