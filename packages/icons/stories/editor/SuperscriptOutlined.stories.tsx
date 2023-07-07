import type { Meta, StoryObj } from '@storybook/react';

import SuperscriptOutlined from '../../lib/editor/SuperscriptOutlined';

const meta: Meta<typeof SuperscriptOutlined> = {
  component: SuperscriptOutlined,
  tags: ['autodocs'],
  title: 'editor/SuperscriptOutlined',
};

export default meta;
type Story = StoryObj<typeof SuperscriptOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
