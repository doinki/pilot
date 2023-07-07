import type { Meta, StoryObj } from '@storybook/react';

import PolymerOutlined from '../../lib/action/PolymerOutlined';

const meta: Meta<typeof PolymerOutlined> = {
  component: PolymerOutlined,
  tags: ['autodocs'],
  title: 'action/PolymerOutlined',
};

export default meta;
type Story = StoryObj<typeof PolymerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
