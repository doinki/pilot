import type { Meta, StoryObj } from '@storybook/react';

import MicrowaveOutlined from '../../lib/places/MicrowaveOutlined';

const meta: Meta<typeof MicrowaveOutlined> = {
  component: MicrowaveOutlined,
  tags: ['autodocs'],
  title: 'places/MicrowaveOutlined',
};

export default meta;
type Story = StoryObj<typeof MicrowaveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
