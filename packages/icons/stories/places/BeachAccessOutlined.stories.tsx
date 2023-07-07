import type { Meta, StoryObj } from '@storybook/react';

import BeachAccessOutlined from '../../lib/places/BeachAccessOutlined';

const meta: Meta<typeof BeachAccessOutlined> = {
  component: BeachAccessOutlined,
  tags: ['autodocs'],
  title: 'places/BeachAccessOutlined',
};

export default meta;
type Story = StoryObj<typeof BeachAccessOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
