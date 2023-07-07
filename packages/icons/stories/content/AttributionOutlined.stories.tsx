import type { Meta, StoryObj } from '@storybook/react';

import AttributionOutlined from '../../lib/content/AttributionOutlined';

const meta: Meta<typeof AttributionOutlined> = {
  component: AttributionOutlined,
  tags: ['autodocs'],
  title: 'content/AttributionOutlined',
};

export default meta;
type Story = StoryObj<typeof AttributionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
