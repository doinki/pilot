import type { Meta, StoryObj } from '@storybook/react';

import AllInclusiveOutlined from '../../lib/places/AllInclusiveOutlined';

const meta: Meta<typeof AllInclusiveOutlined> = {
  component: AllInclusiveOutlined,
  tags: ['autodocs'],
  title: 'places/AllInclusiveOutlined',
};

export default meta;
type Story = StoryObj<typeof AllInclusiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
