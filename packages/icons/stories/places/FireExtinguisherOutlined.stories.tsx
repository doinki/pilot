import type { Meta, StoryObj } from '@storybook/react';

import FireExtinguisherOutlined from '../../lib/places/FireExtinguisherOutlined';

const meta: Meta<typeof FireExtinguisherOutlined> = {
  component: FireExtinguisherOutlined,
  tags: ['autodocs'],
  title: 'places/FireExtinguisherOutlined',
};

export default meta;
type Story = StoryObj<typeof FireExtinguisherOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
