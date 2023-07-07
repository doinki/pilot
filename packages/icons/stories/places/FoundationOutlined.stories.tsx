import type { Meta, StoryObj } from '@storybook/react';

import FoundationOutlined from '../../lib/places/FoundationOutlined';

const meta: Meta<typeof FoundationOutlined> = {
  component: FoundationOutlined,
  tags: ['autodocs'],
  title: 'places/FoundationOutlined',
};

export default meta;
type Story = StoryObj<typeof FoundationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
