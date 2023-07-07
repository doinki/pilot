import type { Meta, StoryObj } from '@storybook/react';

import DraftsOutlined from '../../lib/content/DraftsOutlined';

const meta: Meta<typeof DraftsOutlined> = {
  component: DraftsOutlined,
  tags: ['autodocs'],
  title: 'content/DraftsOutlined',
};

export default meta;
type Story = StoryObj<typeof DraftsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
