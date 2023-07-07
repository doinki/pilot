import type { Meta, StoryObj } from '@storybook/react';

import NoiseAwareOutlined from '../../lib/action/NoiseAwareOutlined';

const meta: Meta<typeof NoiseAwareOutlined> = {
  component: NoiseAwareOutlined,
  tags: ['autodocs'],
  title: 'action/NoiseAwareOutlined',
};

export default meta;
type Story = StoryObj<typeof NoiseAwareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
