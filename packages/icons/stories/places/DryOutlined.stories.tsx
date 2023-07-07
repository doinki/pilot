import type { Meta, StoryObj } from '@storybook/react';

import DryOutlined from '../../lib/places/DryOutlined';

const meta: Meta<typeof DryOutlined> = {
  component: DryOutlined,
  tags: ['autodocs'],
  title: 'places/DryOutlined',
};

export default meta;
type Story = StoryObj<typeof DryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
