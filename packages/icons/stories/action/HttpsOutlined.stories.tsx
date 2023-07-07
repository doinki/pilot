import type { Meta, StoryObj } from '@storybook/react';

import HttpsOutlined from '../../lib/action/HttpsOutlined';

const meta: Meta<typeof HttpsOutlined> = {
  component: HttpsOutlined,
  tags: ['autodocs'],
  title: 'action/HttpsOutlined',
};

export default meta;
type Story = StoryObj<typeof HttpsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
